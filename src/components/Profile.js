import React from 'react'
import {Switch, Route} from 'react-router-dom'
import About from './About'
import Portfolio from './Portfolio'
import Services from './Services'
import Contact from './Contact'
import Header from './Header'
import './style/Profile.scss'

const Profile = (props) => {
    return(
        <div className='profile entry'>
            <Header {...props} currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} />
            <Switch>
                <Route exact path='/profile/about' render={() => <About setCurrentPage={props.setCurrentPage} />} />
                <Route exact path='/profile/portfolio' render={() => <Portfolio setCurrentPage={props.setCurrentPage} />} />
                <Route exact path='/profile/contact' render={() => <Contact  setCurrentPage={props.setCurrentPage} />} />
            </Switch>
        </div>
    )
}

export default Profile