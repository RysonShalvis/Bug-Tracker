import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Header = (props) => {

    const { user } = useAuth0();    

    return (
        <div className="header">
            <div className="left-header">
                <div onClick={props.onClick} className={`menu-icon menu-icon${props.opened}`}>
                    <div className={`menu-icon-bar menu-icon-bar-one-${props.opened}`}></div>
                    <div className={`menu-icon-bar-short menu-icon-bar-short-${props.opened}`}></div>
                    <div className={`menu-icon-bar menu-icon-bar-two-${props.opened}`}></div>
                </div> 
                <div className={`nav-to nav-to-${props.opened}`}>DASHBOARD</div>
            </div>
            <div className="right-header">
                <img src={user.picture} alt={user.name} className="profile-picture" />
                {/*<div className="three-dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div> */}
            </div>  
        </div>
    )
}

export default Header
