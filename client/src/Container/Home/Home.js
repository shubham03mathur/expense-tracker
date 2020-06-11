import React from 'react';
import { useAuth0 } from '../../react-auth0-spa';
import Layout from '../../Components/UI/Layout/Layout';
const Home = (props) =>  {
    const { user } = useAuth0();
    return (
        <Layout>
            <h1>Currently Logged In User is : {user.nickname} </h1>
        </Layout>
    );
}

export default Home;
