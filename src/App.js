import './App.scss';
import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'

import Landing from './components/Landing'
import Profile from './components/Profile'

function App() {

 const [currentPage, setCurrentPage] = useState('.landing') 
 

  return (
    <div className="App" onbeforeunload="HandleBackFunctionality()">
          <Switch>
            <Route exact path='/' render={(rp) => <Landing {...rp}/>} />
            <Route  path='/profile' render={(rp) => <Profile {...rp} currentPage={currentPage} setCurrentPage={setCurrentPage} />} />
          </Switch>
    </div>
  );
}

export default App;
