import React from 'react';
import {
  BrowserRouter as Foobar,
  Switch,
  Route,
  Link
} from "react-router-dom"



import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';


export default function App()  {
  return (
    <Foobar>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          {<About />}
      
        </Route>
        <Route path="/users">
          { <Users />}
          
        </Route>
        <Route path="/">
         {<Home />}
        
        </Route>
      </Switch>
    </div>
  </Foobar>
  
    /* <div className="App">
      <header className="App-header">
      <Welcome name="Nacho" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div> */
  );
}


function Home() {
  return     <div className="App">
  <header className="App-header">
  <Welcome name="Nacho" />
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      HOME HOME Edit <code>src/App.js</code> and save to reload.
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
</div> ;
}

function About() {
  return  <div className="App">
  <header className="App-header">
  <Welcome name="Nacho" />
    <img src={logo} className="App-logo" alt="logo" />
    <p>
     About About Edit <code>src/App.js</code> and save to reload.
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
</div> ;
}

function Users() {
  return <div className="App">
  <header className="App-header">
  <Welcome name="Nacho" />
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Users Users Edit <code>src/App.js</code> and save to reload.
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
</div> ;
}

