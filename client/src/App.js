import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './sass/main.scss';

//Components
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import About from './components/about/About';

//Redux
import { Provider } from 'react-redux';
import store from './store';

import { loadUser } from './actions/auth';
import tokenAuth from './utils/tokenAuth';

if (localStorage.token) {
  tokenAuth(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
