import React from 'react';
import Home from './Home';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
    
    const { loginWithRedirect,isAuthenticated } = useAuth0();
    const { logout } = useAuth0();
    if (!isAuthenticated) {
        
            return (
                <button onClick={() => loginWithRedirect()}>
                    Login
                </button>
            )
                
    } else if (isAuthenticated) {
        return (
            <Home />
        )
    }
}

export default Login
