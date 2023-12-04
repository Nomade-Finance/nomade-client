export const translateError = (error: string) => {
    const errorTranslations: { [key: string]: string } = {
        "Invalid credentials": "Identifiants invalides",
        "Email and password are required": "Email et mot de passe sont requis",
        "Invalid server response": "Réponse du serveur invalide",
        "Connection error": "Erreur de connexion",
        "An unexpected error occurred": "Une erreur inattendue s'est produite",
        "Unauthorized": "Identifiants invalides",
        "Network Error": "Erreur de réseau",
    };
    return errorTranslations[error] || error;
};