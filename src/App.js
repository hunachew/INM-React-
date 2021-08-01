import React from 'react';
import {
  BrowserRouter as Foobar,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

export default function App()  {
  return (
    <Foobar>
    <div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName ="current">Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/about"  activeClassName ="current">About</NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName ="current">Contact</NavLink>
          </li>
          <li>
            <NavLink  exact to="/projects" activeClassName ="current">Projects</NavLink>
          </li>
        </ul>
      </nav>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          {<About />}
        </Route>
        <Route path="/contact">
          {<Contact />}
          </Route>
        <Route path="/projects">
          {<Projects/>} 
        </Route>
        <Route path="/">
         {<Home />}
        </Route>
      </Switch>
    </div>
  </Foobar>
  );
}






