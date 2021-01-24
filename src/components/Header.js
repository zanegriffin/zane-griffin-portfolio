import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {

    const toHome = () => {
        const landing = document.querySelector('.landing')
        landing.classList.add('exit')
        setTimeout(() => {
            props.history.push('/profile')
        }, 1000);
    }
    const toAbout = () => {
        const landing = document.querySelector('.landing')
        landing.classList.add('exit')
        setTimeout(() => {
            props.history.push('/profile')
        }, 1000);
    }
    const toPortfolio = () => {
        const landing = document.querySelector('.landing')
        landing.classList.add('exit')
        setTimeout(() => {
            props.history.push('/profile')
        }, 1000);
    }
    const toContact = () => {
        const landing = document.querySelector('.landing')
        landing.classList.add('exit')
        setTimeout(() => {
            props.history.push('/profile')
        }, 1000);
    }
    
    return(
        <div className='header'>
            <div className='links'>
                <Link><h3>Home</h3></Link>
                <Link><h3>About</h3></Link>
                <Link><h3>Portfolio</h3></Link>
                <Link><h3>Contact</h3></Link>
            </div>
        </div>
    )
}

export default Header