export const validateEmail = (email: string) => {
    if (!email) {
        return "Email requis";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        return "Format email invalide";
    }
    return "";
};
export const validatePassword = (password: string) => {
    if (!password) {
        return "Mot de passe requis";
    } else if (!/(?=.*[A-Z])/.test(password)) {
        return "Ajoutez une majuscule";
    } else if (!/(?=.*\d)/.test(password)) {
        return "Ajoutez un chiffre";
    } else if (!/(?=.*[@$!%*#?&])/i.test(password)) {
        return "Ajoutez un caractère spécial";
    } else if (!/.{8,}/.test(password)) {
        return "8 caractères minimum";
    }
    return "";
};