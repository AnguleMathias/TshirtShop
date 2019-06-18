import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'gestalt/dist/gestalt.css';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/products/Home';
import Navbar from './components/navbar/Navbar';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import Checkout from './components/Checkout';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const App = () => {
    return (
      <ApolloProvider client={client}>
        <Router>
          <React.Fragment>
            <Navbar />
            <Switch>
              <Route component={Home} exact path="/" />
              <Route component={Login} path="/login" />
              <Route component={Signup} path="/signup" />
              <Route component={Checkout} path="/checkout" />
            </Switch>
          </React.Fragment>
        </Router>
      </ApolloProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
