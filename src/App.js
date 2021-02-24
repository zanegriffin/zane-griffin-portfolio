import './App.scss';
import React, {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'

import Landing from './components/Landing'
import Profile from './components/Profile'
import Cursor from './components/Cursor'

function App() {

 const [currentPage, setCurrentPage] = useState('.landing') 

 const wakeUpHeroku = () => {
   fetch('https://email-zanegriffin.herokuapp.com')
   .then(response => {
     console.log(response)
   })
 }

 useEffect(() => {
   wakeUpHeroku()
 }, [])

  return (
    <div className="App" onbeforeunload="HandleBackFunctionality()">
      <Cursor></Cursor>
      <Switch>
        <Route exact path='/' render={(rp) => <Landing {...rp} setCurrentPage={setCurrentPage}/>} />
        <Route path='/profile' render={(rp) => <Profile {...rp} currentPage={currentPage} setCurrentPage={setCurrentPage} />} />
      </Switch>
    </div>
  );
}

export default App;
