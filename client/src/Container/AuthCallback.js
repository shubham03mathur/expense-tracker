import React, { useEffect } from 'react';
import { useAuth0 } from "../react-auth0-spa";
import Layout from '../Components/UI/Layout/Layout';

const AuthCallback = (props) => {
    const { isAuthenticated } = useAuth0();
    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/home');
        } else { 
            props.history.push('/');
        }
    }, []);
 
    return (
        <Layout>
            <h1>
                Hang On! We are Logging You In..
            </h1>
        </Layout>
    );
};

export default AuthCallback;
