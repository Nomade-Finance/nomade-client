const welcomePhrases = [
    'Bienvenue à l\'oasis',
    'Inscription réussie',
    'Inscrit avec succès',
];

const helloPhrases = [
    'Bienvenue à l\'oasis',
    'Bienvenue au campement',
    'Ravis de te revoir'
];

const successPhrases = [
    'Connexion réussie',
    'Connecté avec succès',
];

export function getRandomHelloPhrase() {
    return helloPhrases[Math.floor(Math.random() * helloPhrases.length)];
}

export function getRandomWelcomePhrase() {
    return welcomePhrases[Math.floor(Math.random() * welcomePhrases.length)];
}

export function getRandomSuccessPhrase() {
    return successPhrases[Math.floor(Math.random() * successPhrases.length)];
}