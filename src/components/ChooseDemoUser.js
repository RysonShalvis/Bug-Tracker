import React from 'react';
import { useState } from 'react';
import Home from './Home';

const ChooseDemoUser = (props) => {

    const [userType,setUserType] = useState('');
    const [userClick,setUserClick] = useState(false);
    let testing;

    const chooseUser = (event) => {
        setUserType(event.target.innerText);
        setUserClick(true);
        
    }

    if (userClick) {
        return <Home userType={userType} />
    }

    return (
        <div className="choose-demo-user-ctn">
            <h1 className="choose-demo-user" onClick={chooseUser}>Admin</h1>
            <h1 className="choose-demo-user" onClick={chooseUser}>Project Manager</h1>
            <h1 className="choose-demo-user" onClick={chooseUser}>Developer</h1>
            <h1 className="choose-demo-user" onClick={chooseUser}>Submitter</h1>
            <h1 className="choose-demo-user" onClick={props.goBack} >back</h1>
        </div>
    )
}

export default ChooseDemoUser
