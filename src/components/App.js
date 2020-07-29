import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import ArtClasses from "./ArtClasses";
import Artists from "./Artists";
import Events from "./Events";
import Exhibitions from "./Exhibitions";
import Rentals from "./Rentals";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Exhibitions">Exhibitions</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Artists">Artists</Link>
              </li>
              <li>
                <Link to="/Events">Events</Link>
              </li>
              <li>
                <Link to="/Rentals">Rentals</Link>
              </li>
              <li>
                <Link to="/ArtClasses">Art Classes</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/Home"></Route>
            <Route path="/Exhibitions">
              <Exhibitions />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Artists">
              <Artists />
            </Route>
            <Route path="/Events">
              <Events />
            </Route>
            <Route path="/Rentals">
              <Rentals />
            </Route>
            <Route path="/Artclasses">
              <ArtClasses />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
