import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSigninCheck } from 'reactfire';

import Perfil from '../components/Perfil';

const Auth = (props) => {
    const { status, data: signInCheckResult } = useSigninCheck();

    if(status === "loading") {
        return (<h1>Loading...</h1>)
    }

    if(signInCheckResult.signedIn === true){
        return <Perfil usuario={signInCheckResult.user} />
    }

    return <Redirect to="/ingresar" />
}

export default Auth;