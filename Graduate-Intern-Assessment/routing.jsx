import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Home() {
  return <h2>Welcome Home </h2>;
}

function About() {
  return <h2>About Us</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
          </ul>
        </nav>

        <Switch>
          {/* Define Routes */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}