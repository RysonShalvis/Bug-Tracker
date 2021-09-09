import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {

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
    
  <div className="outer" >
      <div >

      <NavBar opened={opened} />
      </div>
      <div className={`main main${opened}`}>
        <Header onClick={handleClick} />
        <Dashboard/>
      </div>
  </div>



  );
}

export default App;
