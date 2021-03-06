import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import dashboardIcon from '../dashboard-icon.png';


const NavBar = (props) => {
    const { logout } = useAuth0();

    const navToDashboard = () => {
        props.onClick();
        props.dashboardClicked();
    }

    const navToCreateTicket = () => {
        props.onClick();
        props.createTicketClicked();
    }
    

    return (
        <div className="nav-ctn" >
            <div className={`nav-bar ${props.opened}`}>
                <div className="nav-bar-wrapper">
                    <div className="account">
                        <img src={props.user.picture} alt={props.user.name} className="account-picture"/>
                        <div className="account-name">{props.user.name.toUpperCase()}</div>
                    </div>
                </div>
                <div className="underline"></div>
                <div className="nav-bar-wrapper">
                    <div className="nav-link" onClick={props.onClick} onClick={navToDashboard}>
                        <img src={dashboardIcon} alt="icon" className="nav-icon" />
                        <div className="nav-name">Dashboard</div>
                    </div>
                    <div onClick={navToDashboard} className="nav-link">
                        <img src={dashboardIcon} alt="icon" className="nav-icon" />
                        <div className="nav-name">Dashboard</div>
                    </div>
                    <div onClick={navToCreateTicket} className="nav-link">
                        <img src={dashboardIcon} alt="icon" className="nav-icon" />
                        <div  className="nav-name">Create Ticket</div>
                    </div>
                    <div onClick={navToDashboard} className="nav-link">
                        <img src={dashboardIcon} alt="icon" className="nav-icon" />
                        <div className="nav-name">Dashboard</div>
                    </div>
                    <div onClick={navToDashboard} className="nav-link">
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
