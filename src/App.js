import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import Article from './components/articles';
import Greeter from './components/greeter';
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom';
import { ES6 } from './pages/es6';
import OOP from './pages/oop';
import { HelloReact } from './pages/hello_react';
import { AsyncEtc } from './pages/async_callback';
import { Dashboard } from './pages/dashboard';

function App() {

  return (
    <div>
      <Router basename="/">
        <header>
          <Navbar />
        </header>
        <div className="">
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route def exact path="/home">
              <Dashboard />
            </Route>
            <Route def exact path="/helloreact">
              <HelloReact />
            </Route>
            <Route path="/es6">
              <ES6 />
            </Route>
            <Route path="/oop">
              <OOP />
            </Route>
            <Route path="/async">
              <AsyncEtc />
            </Route>

          </Switch>


        </div>
      </Router>

    </div>
  );
}

export default App;
