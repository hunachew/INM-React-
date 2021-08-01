import logo from './../image/logo.svg';
import './../css/App.css';

export default function Home()  {
  return (
    <div className="App home">
      <header className="App-header">
   
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React 
        </p>
     
      </header>
      
    </div>
    );
  }


