import Dashboard from './Dashboard';
import Header from './Header';
import DesktopHeader from './DesktopHeader';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import users from '../userObject';
import tickets from'../demoTicketsObject';
function Home (props) {

  const [opened, setOpened] = useState(false);
  const [userType, setUserType] = useState('');
  const [userObject, setUserObject] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const [filteredTickets, setFilteredTickets] = useState([]); 

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
        setFilteredTickets(tickets);

      } else if (props.userType === 'Project Manager') {
        let teamTickets = tickets.filter(a => a.team === users[1].team);
        setFilteredTickets(teamTickets);
        console.log(teamTickets)
        setUserObject(users[1]);

      } else if (props.userType === 'Developer') {
        setUserObject(users[2]);
        let i;
        let developerTickets =[];
        for (i = 0; i < users[2].tickets.length; i++) {
          let j;
          for (j = 0; j < tickets.length; j++) {
            if (users[2].tickets[i] === tickets[j].id) {
              developerTickets.push(tickets[j])
            }
          }
          
        }
        setFilteredTickets(developerTickets);
        console.log(developerTickets);
        
      } else if (props.userType === 'Submitter') {
        setUserObject(users[3]);

        let i;
        let submitterTickets =[];
        for (i = 0; i < users[2].tickets.length; i++) {
          let j;
          for (j = 0; j < tickets.length; j++) {
            if (users[3].submittedTickets[i] === tickets[j].id) {
              submitterTickets.push(tickets[j])
            }
          }
          
        }
        setFilteredTickets(submitterTickets);
        console.log(submitterTickets);


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
          <Dashboard tickets={filteredTickets} user={userObject}/>
        </div>
    </div>
      
    );
    }

    return <></>

  
}

export default Home;
