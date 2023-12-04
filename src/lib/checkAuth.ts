import { GetServerSideProps } from 'next';
import cookie from 'cookie';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const cookies = cookie.parse(context.req.headers.cookie || '');
    const token = JSON.parse(cookies.accessToken || '');

    if (!token) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
};