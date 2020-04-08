import React, {Fragment} from 'react';
import './index.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import { Menu, Container } from 'semantic-ui-react';

export default function App() {
  return(
    <Router>
      <main>
        <Menu>
          <Menu.Item
            name="Home"
            active={true}
          >
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item
            name="About"
          >
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item
            name="Contact"
          >
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </main>
      <br />
      <br />
      <Container>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/contact" component={ Contact } />
        </Switch>
      </Container>
    </Router>
  );
}