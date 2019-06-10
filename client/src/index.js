import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'gestalt/dist/gestalt.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import Navbar from './components/navbar/Navbar';
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import Checkout from "./components/Checkout";

const Root = () => (
  <Router>
    <React.Fragment>
      <Navbar />
      <Switch>
          <Route component={App} exact path="/" />
          <Route component={Login} path="/login" />
          <Route component={Signup} path="/signup" />
          <Route component={Checkout} path="/checkout" />
      </Switch>
    </React.Fragment>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

if(module.hot) {
    module.hot.accept();
}
