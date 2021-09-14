import Dashboard from './Dashboard';
import Header from './Header';
import DesktopHeader from './DesktopHeader';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import users from '../userObject';
function Home() {

  const { user, isAuthenticated } = useAuth0();

  const createUser = (newUser) => {
    return {
      given_name: newUser.given_name,
      family_name: newUser.family_name,
    }
  }

  const [opened, setOpened] = useState(false);
  const [userType, setUserType] = useState('');
  useEffect(() => {
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
    /*if () {

    }
     */
    
  })
  
  

  const handleClick = () => {
        if (opened === false) {
          setOpened(true)
        } else {
          setOpened(false)
        }
        console.log(opened);
  }

  return (
    isAuthenticated && (
      <div className="outer" >
      <div >

      <NavBar opened={opened} />
      </div>
      <div className={`main main${opened}`}>
        <Header opened={opened} onClick={handleClick} />
        <Dashboard/>
      </div>
  </div>
    )
  );
}

export default Home;
