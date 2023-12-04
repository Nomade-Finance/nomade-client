import './_avatar.scss'

import React, { useContext } from 'react';

import Cookies from 'js-cookie';
import Link from 'next/link';
import {LoginRounded} from '@mui/icons-material';
import {LogoutRounded} from '@mui/icons-material';
import UserContext from '@/contexts/UserContext';
import { useRouter } from 'next/navigation';

const Avatar: React.FC = () => {
    const router = useRouter();
    const userContext = useContext(UserContext);

    if (!userContext) {
        throw new Error('Avatar must be used within a UserProvider');
    }

    const [user, setUser] = userContext;

    const logout = () => {
        Cookies.remove('accessToken');
        router.push('/auth/login')
        setUser(null); 
    };

    if (user) {
        return (
            <div className='hstack'>
                <Link href="/user/profile">
                    <code className='user-display'>{user.name}</code>
                </Link>
                <button className='avatar-switcher' onClick={logout}><LogoutRounded/></button>
            </div>
        );
    } else {
        return (
            <button className='avatar-switcher' onClick={() => router.push('/auth/login')}><LoginRounded/></button>
        );
    }
};

export default Avatar;