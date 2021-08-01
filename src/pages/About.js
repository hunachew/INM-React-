import logo from './../image/logo.svg';
import './../css/App.css';

export default function About()  {
  return (
    <div className="App about">
      <header className="App-header">
  
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          About 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }


