import './App.scss';
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {CSSTransitionGroup} from 'react-transition-group'
import Landing from './components/Landing'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <Landing/>} />
      </Switch>
    </div>
  );
}

export default App;
