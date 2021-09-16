import React from 'react';
import Home from './Home';
import { useAuth0 } from '@auth0/auth0-react';
import DesktopHeader from './DesktopHeader';

const Login = () => {
    
    const { loginWithRedirect,isAuthenticated } = useAuth0();
    if (!isAuthenticated) {
        
            return (
                <button className="login-btn" onClick={() => loginWithRedirect()}>
                    Login
                </button>
            )
                
    } else if (isAuthenticated) {
        return (
            <>
                
                <Home />
            </>
        )
    }
}

export default Login
