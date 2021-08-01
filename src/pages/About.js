import logo from './../image/logo.svg';
import './../css/App.css';
export default function About()  {
  return (
    <div className="App about">
      <header className="App-header">
        <p>
        <div class="about-section">
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industr .</p>
        </div>
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


