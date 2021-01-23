import React from 'react'
import About from './About'
import Contact from './Contact'
import Header from './Header'
import './style/Profile.scss'

const Profile = () => {
    return(
        <div className='profile'>
            <Header/>
            <About/>
            <Contact/>
        </div>
    )
}

export default Profile