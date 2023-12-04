import React, { createContext } from 'react';

interface User {
    name: string;
}

const UserContext = createContext<[User | null, React.Dispatch<React.SetStateAction<User | null>>] | undefined>(undefined);

export default UserContext;