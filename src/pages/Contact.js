import logo from './../image/logo.svg';
import './../css/App.css';

export default function Contact()  {
  return (
    <div className="App contact">
      <header className="App-header">
   
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contact 
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/help/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Help Center
        </a>
      </header>
    </div>
    );
  }


