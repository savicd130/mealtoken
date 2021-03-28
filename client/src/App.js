import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './sass/main.scss';

//Components
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

const App = () => {
  return (
    // <Provider store={store}>
    <Router>
      <div className="container">
        <Navbar />
        <Route exact path="/" component={Landing} />
      </div>
    </Router>
    // </Provider>
  );
};

export default App;
