import React from 'react'

const Header = () => {
    return (
        <div className="header">
            <div className="left-header">
                <div className="menu-icon">
                    <div className="menu-icon-bar"></div>
                    <div className="menu-icon-bar-short"></div>
                    <div className="menu-icon-bar"></div>
                </div> 
                <div className="nav-to">DASHBOARD</div>
            </div>
            <div className="right-header">
                <div className="three-dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>  
        </div>
    )
}

export default Header
