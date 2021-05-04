
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { FooterPage } from './components/FooterPage';
import React from 'react';

import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import { Contact } from './Contact';
import  Virtualization  from './solutions/Virtualization';
import  CloudSolutions  from './solutions/CloudSolutions';
import  Networking  from './solutions/Networking';
import  Security  from './solutions/Security';
import  Storage  from './solutions/Storage';
import  EnterpriseManagement  from './solutions/EnterpriseManagement';



function App() {
  require('dotenv').config()
  return (
    <>
      <React.Fragment>
        <NavigationBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contact} />
            <Route path="/virtualization" component = { Virtualization } />
            <Route path="/enterprise management" component = { EnterpriseManagement } />
            <Route path="/networking" component = { Networking } />
            <Route path="/security" component = { Security } />
            <Route path="/storage" component = { Storage } />
            <Route path="/cloud solutions" component = { CloudSolutions } />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
      <FooterPage />
    </>
  )
}

export default App;
