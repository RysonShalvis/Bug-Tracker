import React from 'react'

const NavBar = (props) => {
    return (
        <div className={`nav-bar ${props.opened}`}>
            <div className="nav-bar-wrapper">
                <div className="account">
                    <img src="" alt="Ryso" className="account-picture"/>
                    <div className="account-name">Ryso</div>
                </div>
            </div>
            <div className="underline"></div>
            <div className="nav-bar-wrapper">
                <div className="nav-link">
                    <img src="" alt="icon" className="nav-icon" />
                    <div className="nav-name">Dashboard</div>
                </div>
                <div className="nav-link">
                    <img src="" alt="icon" className="nav-icon" />
                    <div className="nav-name">Dashboard</div>
                </div>
                <div className="nav-link">
                    <img src="" alt="icon" className="nav-icon" />
                    <div className="nav-name">Dashboard</div>
                </div>
                <div className="nav-link">
                    <img src="" alt="icon" className="nav-icon" />
                    <div className="nav-name">Dashboard</div>
                </div>
                <div className="nav-link">
                    <img src="" alt="icon" className="nav-icon" />
                    <div className="nav-name">Dashboard</div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
