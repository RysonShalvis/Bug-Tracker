import Dashboard from './Dashboard';
import Header from './Header';
import DesktopHeader from './DesktopHeader';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import users from '../userObject';
function Home (props) {

  const [opened, setOpened] = useState(false);
  const [userType, setUserType] = useState('');
  const [userObject, setUserObject] = useState(false);
  const { user, isAuthenticated } = useAuth0();

  const createUser = (newUser) => {
    return {
      given_name: newUser.given_name,
      family_name: newUser.family_name,
    }
  }


  
  useEffect(() => {
    
    if (isAuthenticated) {
      setUserObject(user);
      let i;
    for (i = 0;i < users.length; i++) {
      if (users[i].sub === user.sub) {
        setUserType(users[i].userType);
        console.log(userType);
        break;
      }
      if (i === users.length - 1 && users[i].sub !== user.sub) {
        let newUser = createUser(user);
        newUser.id = users.length.toString();
        console.log(newUser)
        users.push(newUser)
        break;
      }
    };
    } else {
      if (props.userType === 'Admin') {
        setUserObject(users[0]);
      } else if (props.userType === 'Project Manager') {
        setUserObject(users[1]);
      } else if (props.userType === 'Developer') {
        setUserObject(users[2]);
      } else if (props.userType === 'Submitter') {
        setUserObject(users[3]);
      } else {
        setUserObject(users[0]);
      }
      
    }
    
    /*if () {

    }
     */
    
  }, [])
  
  

  const handleClick = () => {
        if (opened === false) {
          setOpened(true)
        } else {
          setOpened(false)
        }
        console.log(opened);
  }

    if (userObject) {
      return (
    
        <div className="outer" >
          
        <div >
  
        <NavBar user={userObject} opened={opened} />
        </div>
        
        <div className={`main main${opened}`}>
          <DesktopHeader user={userObject} />
          <Header user={userObject} opened={opened} onClick={handleClick} />
          <Dashboard user={userObject}/>
        </div>
    </div>
      
    );
    }

    return <></>

  
}

export default Home;
