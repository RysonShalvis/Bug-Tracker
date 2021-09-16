import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';



const DesktopHeader = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div className="desktop-header">
            <div className="left-header-dsktp">
                <div className="nav-to">DASHBOARD</div>
            </div>
            <div className="right-header-dsktp">
                <img src={user.picture} alt={user.name} className="profile-picture" />
            </div>
        </div>
        )
        
    )
}

export default DesktopHeader
