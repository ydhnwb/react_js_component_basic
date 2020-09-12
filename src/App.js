import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import Article from './components/articles';
import Greeter from './components/greeter';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ES6 } from './pages/es6';
import OOP from './pages/oop';
import { HelloReact } from './pages/hello_react';
import { AsyncEtc } from './pages/async_callback';

function App() {

  return (
    <div>
      <Router>
        <header>
          <Navbar />
        </header>
        <div className="container">
            <Switch>
              <Route exact path="/">
                <HelloReact />
              </Route>
              <Route path="/es6">
                <ES6 />
              </Route>
              <Route path="/oop">
                <OOP />
              </Route>
              <Route path="/async">
                <AsyncEtc/>
              </Route>

            </Switch>


        </div>
      </Router>

    </div>
  );
}

export default App;
