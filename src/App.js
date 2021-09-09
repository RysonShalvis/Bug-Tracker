import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import NavBar from './components/NavBar';

function App() {
  return (
    
  <div className="outer" >
      <div >

      <NavBar />
      </div>
      <div className="main">
        <Header/>
        <Dashboard/>
      </div>
  </div>



  );
}

export default App;
