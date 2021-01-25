import React from "react";
import Home from '../Homepage/Homepage';
import ProductPage from '../Productpage/Product'
import Contactpage from '../Contactpage/Contact'

import {
  BrowserRouter as Router, Route} from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/Product' component={ProductPage} />
        <Route exact path='/Contact' component={Contactpage} />
      </div>
      </Router>
    );
  }
}

export default Routes;