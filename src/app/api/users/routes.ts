import { COOKIE_NAME } from "@/constant";
import Cookies from "js-cookie";
import axios from 'axios';

export const getUser = async () => {
    const tokenCookie = Cookies.get(COOKIE_NAME);

    if (!tokenCookie) {
        return null;
    }

    const token = JSON.parse(tokenCookie);
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error(error); // TODO: gérer les erreurs
        return null;
    }
};