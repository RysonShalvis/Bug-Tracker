import React from 'react';
import '../App.css';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';

const App = () => {
    return (
        <div>
            <Login />
            {/*<Home /> */}
            <Profile />
            <Home />
        </div>
    )
}

export default App
