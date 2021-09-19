import React from 'react';
import Home from './Home';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import DesktopHeader from './DesktopHeader';
import ChooseDemoUser from './ChooseDemoUser';

const Login = () => {

    const [clicked, setClicked] = useState(false)

    const navDemoPage = () => {
        setClicked(true);
    }

    const goBack = () => {
        setClicked(false)
    }
    
    const { loginWithRedirect,isAuthenticated } = useAuth0();
    if (!isAuthenticated) {
        if (clicked) {
            return <ChooseDemoUser goBack={goBack} />
        }
            return (
                <>
                    <button className="login-btn" onClick={() => loginWithRedirect()}>
                        Login
                    </button>
                    <p onClick={navDemoPage} className="demo-user" href="">Demo User</p>
                </>
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
