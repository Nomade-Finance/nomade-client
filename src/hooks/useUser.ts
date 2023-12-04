import { useEffect, useState } from 'react';

import { getUser } from '@/app/api/users/routes';

const useUser = ()  => {
    const [username, setUsername] = useState<string | null>(null);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getUser();
                setUsername(data.name);
            } catch (error) {
                console.error("Erreur lors de la récupération de l'utilisateur");
            }
        };
        fetchUser();
    }, []);
    return username;
};

export default useUser;