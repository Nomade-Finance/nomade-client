"use client";

import "../_auth.scss";

import React, { FormEvent, useContext, useRef, useState } from "react";
import { validateEmail, validatePassword } from "@/lib/utils/validation";

import { COOKIE_NAME } from "@/constant/index";
import Cookies from "js-cookie";
import Link from "next/link";
import Submit from "@/components/Button/Submit";
import UserContext from "@/contexts/UserContext";
import { getRandomSuccessPhrase } from "@/lib/utils/phrases";
import { getUser } from "@/app/api/users/routes";
import { loginUser } from "@/app/api/login/routes";
import { translateError } from "@/lib/utils/translateError";
import { useRouter } from "next/navigation";

type LogUser = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [connected, setConnected] = useState<boolean>(false);
  const randomSuccessPhrase = getRandomSuccessPhrase();
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

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();

    const user: LogUser = {
      email: email,
      password: password,
    };
    // Validation côté client
    if (emailError || passwordError) {
      setError(translateError(emailError || passwordError));
      return;
    }

    setLoading(true);
    setError(null); // Réinitialisez l'état d'erreur avant une nouvelle tentative de connexion

    loginUser(user)
      .then((response) => {
        if (
          response &&
          typeof response === "string" &&
          response.split(".").length === 3
        ) {
          Cookies.set(COOKIE_NAME, JSON.stringify(response));
          getUser().then((userObject) => {
            setUser(userObject);
          });
          setConnected(true);
          setTimeout(() => {
            router.push("/dashboard");
          }, 1000);
        } else {
          // Gérer les erreurs côté serveur
          let errorResponse;
          if (typeof response === "string") {
            try {
              errorResponse = JSON.parse(response);
            } catch (e) {
              setError(translateError("Invalid server response"));
              setConnected(false);
              return;
            }
          } else {
            errorResponse = response;
          }
          setError(
            translateError(errorResponse.message || "Invalid credentials")
          );
          setConnected(false); // Assure que l'état connecté est faux lorsque la connexion échoue
        }
      })
      .catch((error) => {
        if (error instanceof Error) {
          switch (error.message) {
            case translateError("Unauthorized"):
              setError(translateError("Identifiants invalides"));
              break;
            case translateError("Network Error"):
              setError(translateError("Erreur de connexion"));
              break;
            default:
              setError(translateError("Une erreur inattendue s'est produite"));
          }
        } else {
          setError(translateError("Une erreur inattendue s'est produite"));
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="form-container">
      {connected ? (
        <h1 className="status-text">{randomSuccessPhrase}</h1>
      ) : (
        <>
          <h1 className="header-text">Connexion</h1>
          <form onSubmit={handleLogin} className="form">
            {emailError && <p className="error-text">{emailError}</p>}
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className="input"
              inputMode="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {passwordError && <p className="error-text">{passwordError}</p>}
            <input
              ref={passwordRef}
              type="password"
              placeholder="Mot de passe"
              autoComplete="on"
              className="input"
              value={password}
              onChange={handlePasswordChange}
              required
            />

            <Submit
              type="submit"
              disabled={loading}
              label="Se Connecter"
              isLoading={loading}
            />
          </form>
          {error && <p className="error-text">{translateError(error)}</p>}
          <p className="link-text">
            Pas encore de compte ?{" "}
            <Link href="/auth/register">
              <span>S&apos;inscrire</span>
            </Link>
          </p>
        </>
      )}
    </div>
  );
};

export default LoginPage;
