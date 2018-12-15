import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {connect} from 'react-redux';

import Header from '../HeaderComponent/Header';
import Project from '../ProjectComponent/ProjectComponent';
import Admin from '../AdminComponent/AdminComponent';

class App extends Component {
  
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="Header">
          <Header />
          <Route exact path= "/" component={Project} />
          <Route exact path ="/admin" component={Admin} />
        </div>
      </Router> // for SPA routing 
    );
  }
}

export default connect()(App);
