import './App.scss';
import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Landing from './components/Landing'
import Profile from './components/Profile'

function App() {

 

  return (
    <div className="App">
          <Switch>
            <Route exact path='/' render={(rp) => <Landing {...rp}/>} />
            <Route  path='/profile' render={(rp) => <Profile {...rp} />} />
          </Switch>
    </div>
  );
}

export default App;
