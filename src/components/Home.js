import Dashboard from './Dashboard';
import Header from './Header';
import NavBar from './NavBar';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
function Home() {

  const { user, isAuthenticated } = useAuth0();

  const [opened, setOpened] = useState(false);

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
        <Header onClick={handleClick} />
        <Dashboard/>
      </div>
  </div>
    )
  );
}

export default Home;
