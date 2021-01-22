import './App.scss';
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import Landing from './components/Landing'
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <Route render={({location}) => (
        <TransitionGroup>
        <CSSTransition
        key={location.key}
        timeout={1000}
        classNames='swap'
        >
          <Switch location={location}>
            <Route exact path='/' render={(rp) => <Landing {...rp}/>} />
            <Route  path='/profile' render={(rp) => <Profile {...rp} />} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      )} />
    </div>
  );
}

export default App;
