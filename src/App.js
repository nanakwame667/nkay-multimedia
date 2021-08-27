import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';

import HomeScreen from './screens/HomeScreen';

function App() {
  return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={HomeScreen}/>
          </Switch>
        </Router>
      </>
  );
}

export default App;
