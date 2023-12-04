"use client"

import React, { useEffect, useState } from 'react';

import Cookies from 'js-cookie';
import UserContext from './UserContext';
import { getUser } from '@/app/api/users/routes';

interface User {
    name: string;
}

export const UserProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | undefined>(Cookies.get('accessToken'));

    useEffect(() => {
        setToken(Cookies.get('accessToken'));
        getUser().then(setUser);
    }, [token]);

    return (
        <UserContext.Provider value={[user, setUser]}>
        {children}
        </UserContext.Provider>
    );
};