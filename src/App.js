import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { FooterPage } from './components/FooterPage';
import React from 'react';

import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import { Contact } from './Contact';


function App() {
  return (
    <>
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
      <FooterPage />
    </>
  )
}

export default App;
