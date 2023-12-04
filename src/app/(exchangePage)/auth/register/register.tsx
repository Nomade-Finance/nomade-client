"use client";

import "../_auth.scss";

import { useContext, useState } from "react";
import { validateEmail, validatePassword } from "@/lib/utils/validation";

import { COOKIE_NAME } from '@/constant/index';
import Cookies from "js-cookie";
import { CreateUser } from "@/lib/interfaces/interfaces";
import Link from "next/link";
import Submit from "@/components/Button/Submit";
import UserContext from "@/contexts/UserContext";
import { getRandomWelcomePhrase } from "@/lib/utils/phrases";
import { getUser } from "@/app/api/users/routes";
import { registerUser } from "@/app/api/register/routes";
import { useRouter } from "next/navigation";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [registered, setRegistered] = useState<boolean>(false);
  const randomSuccessPhrase = getRandomWelcomePhrase();
  const router = useRouter();
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("LoginPage must be used within a UserProvider");
  }
  const [, setUser] = userContext;

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setEmail(email);
    setEmailError(validateEmail(email));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPassword(password);
    setPasswordError(validatePassword(password));
  };

  const handlePasswordConfirmationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const passwordConfirmation = event.target.value;
    setPasswordConfirmation(passwordConfirmation);
    setPasswordConfirmationError(
      password !== passwordConfirmation
        ? "Mode de passe non identique"
        : ""
    );
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setName(name);
    setNameError(!name ? "requis*" : "");
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const phone = event.target.value;
    setPhone(phone);
    setPhoneError(!phone ? "requis*" : "");
  };

  const createUserHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const user: CreateUser = {
      email: email,
      password: password,
      name: name,
      phone: phone,
    };

    // Validation côté client
    if (
      emailError ||
      passwordError ||
      passwordConfirmationError ||
      nameError ||
      phoneError
    ) {
      setError(
        emailError ||
          passwordError ||
          passwordConfirmationError ||
          nameError ||
          phoneError
      );
      return;
    }

    setLoading(true);
    setError(null); //  Réinitialisez l'état d'erreur avant une nouvelle tentative de connexion
    // Après avoir défini le cookie
    registerUser(user)
    .then((data) => {
      if (
        data.token &&
        typeof data.token === "string" &&
        data.token.split(".").length === 3
      ) {
        Cookies.set(COOKIE_NAME, JSON.stringify(data.token));
        getUser().then(userObject => {
          setUser(userObject); // userObject should include the user's name
        });
  
        setError(null);
        setRegistered(true);
        setTimeout(() => {
          router.push("/dashboard"); // rediriger vers le tableau de bord après une inscription réussie
        }, 1000);
      }
    })
      .catch((error) => {
        console.error("Failed to create user:", error);
        if (error.response && error.response.status === 422) {
          setError("Cet utilisateur existe déjà");
        } else if (error.message.includes('User validation failed')) {
          setError("Cet utilisateur existe déjà");
        } else {
          setError("Une erreur inattendue s'est produite");
        }
      }) .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="form-container">
      {registered ? (
        <h1 className="status-text">{randomSuccessPhrase}</h1>
      ) : (
        <>
          <h1 className="header-text">Inscription</h1>
          <form onSubmit={createUserHandler} className="form">
            {nameError && <p className="error-text">{nameError}</p>}
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Nom & Prénom"
              required
              className="input"
            />
            {emailError && <p className="error-text">{emailError}</p>}
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              required
              className="input"
              inputMode="email"
            />
            {passwordError && <p className="error-text">{passwordError}</p>}
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Mot de passe"
              required
              autoComplete="on"
              className="input"
            />
            {passwordError && <p className="error-text">{passwordError}</p>}
            <input
              type="password"
              value={passwordConfirmation}
              onChange={handlePasswordConfirmationChange}
              placeholder="Confirmer le mot de passe"
              required
              autoComplete="on"
              className="input"
            />
            {phoneError && <p className="error-text">{phoneError}</p>}
            <input
              type="number"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Numéro de téléphone"
              inputMode="tel"
              required
              className="input"
            />
            <Submit
              label="Créer un compte"
              className="button"
              disabled={loading}
              isLoading={loading}
            />
          </form>
          {error && <p className="error-text">{error}</p>}
          {passwordConfirmationError && (
            <p className="error-text">{passwordConfirmationError}</p>
          )}
          <p className="link-text">
            Déjà un compte ?{" "}
            <Link href="/auth/login">
              <span>Se Connecter</span>
            </Link>
          </p>
        </>
      )}
    </div>
  );
}
