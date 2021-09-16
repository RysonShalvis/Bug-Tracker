import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import dashboardIcon from '../dashboard-icon.png';

const NavBar = (props) => {
    const { user, logout } = useAuth0();
    return (
        <div className="nav-ctn" >
            <div className={`nav-bar ${props.opened}`}>
                <div className="nav-bar-wrapper">
                    <div className="account">
                        <img src={user.picture} alt={user.name} className="account-picture"/>
                        <div className="account-name">{user.name.toUpperCase()}</div>
                    </div>
                </div>
                <div className="underline"></div>
                <div className="nav-bar-wrapper">
                    <div className="nav-link">
                        <img src={dashboardIcon} alt="icon" className="nav-icon" />
                        <div className="nav-name">Dashboard</div>
                    </div>
                    <div className="nav-link">
                        <img src={dashboardIcon} alt="icon" className="nav-icon" />
                        <div className="nav-name">Dashboard</div>
                    </div>
                    <div className="nav-link">
                        <img src={dashboardIcon} alt="icon" className="nav-icon" />
                        <div className="nav-name">Dashboard</div>
                    </div>
                    <div className="nav-link">
                        <img src={dashboardIcon} alt="icon" className="nav-icon" />
                        <div className="nav-name">Dashboard</div>
                    </div>
                    <div className="nav-link">
                        <img src={dashboardIcon} alt="icon" className="nav-icon" />
                        <div className="nav-name">Dashboard</div>
                    </div>
                    <button onClick={() => logout()}>
                    Logout
                    </button> 
                    
                </div>
            </div>
        </div>
        
    )
}

export default NavBar
