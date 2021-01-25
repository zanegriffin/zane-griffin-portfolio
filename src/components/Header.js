import React from 'react'
import './style/Header.scss'

const Header = (props) => {

    const toHome = () => {
        const page = document.querySelector('.profile')
        page.classList.remove('entry')
        page.classList.add('exit')
        setTimeout(() => {
            props.history.push('/')
        }, 1000);
    }
    const toAbout = () => {
        if(props.currentPage === '.about'){
            return
        }
        const page = document.querySelector(props.currentPage)
        page.classList.remove('entry')
        page.classList.add('exit')
        setTimeout(() => {
            props.history.push('/profile/about')
        }, 1000);
    }
    const toPortfolio = () => {
        if(props.currentPage === '.portfolio'){
            return
        }
        const page = document.querySelector(props.currentPage)
        console.log('page', page, props.currentPage)
        page.classList.remove('entry')
        page.classList.add('exit')
        setTimeout(() => {
            props.history.push('/profile/portfolio')
        }, 1000);
    }
    const toContact = () => {
        if(props.currentPage === '.contact'){
            return
        }
        const page = document.querySelector(props.currentPage)
        page.classList.remove('entry')
        page.classList.add('exit')
        setTimeout(() => {
            props.history.push('/profile/contact')
        }, 1000);
    }
    
    return(
        <div className='header'>
            <h1>Zane Griffin</h1>
            <div className='links'>
                <ul>
                    <li onClick={() => toHome()}>Home</li>
                    <li onClick={() => toAbout()}>About</li>
                    <li onClick={() => toPortfolio()}>Portfolio</li>
                    <li onClick={() => toContact()}>Contact</li>
                </ul>
            </div>
            <div className='mobile'>

            </div>
        </div>
    )
}

export default Header