import logo from './../image/logo.svg';
import './../css/App.css';

export default function Home()  {
  return (
    <div className="App home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <div class="about-section">
          <h1>Welcome to React </h1>
          <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing</p>
        </div>
        </p>
      </header>
    </div>
    );
  }


