import React from 'react';
import {
  BrowserRouter as Foobar,
  Switch,
  Route,
  Link
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
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
          { <Contact />}
          
          </Route>
        <Route path="/projects">
          { <Projects/>}
          
          
        </Route>
        <Route path="/">
         {<Home />}
        
        </Route>
      </Switch>
    </div>
  </Foobar>
  );
}






