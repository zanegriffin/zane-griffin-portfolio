import React, {useState} from 'react'
import './style/Header.scss'
import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Header = (props) => {
    // Mobile Nav Logic
    const [visible, setVisible] = useState(true)
    const mauve = '#EDC9FF'
    const blue = '#70e4efff'

    const [mobileNavStyle, setMobileNavStyle] = useState({
        transform: 'translateX(200%)',
        opacity: 0,
    })

    const [iconStyle, setIconStyle] = useState({
        transform: 'rotate(0deg)',
        color: blue,
    })

    const handleNavAnimationClick = () => {
        setVisible(!visible)
        if(visible){
            setMobileNavStyle({
                transform: 'translateX(0)', 
                opacity: 1
            });
            setIconStyle({
                transform: 'rotate(180deg)',
                color: mauve,
            })
            
        } else if(!visible)
        {
            setMobileNavStyle({
                transform: 'translateX(200%)', 
                opacity: 0
            })
            setIconStyle({
                transform: 'rotate(0deg)',
                color: blue,
            })
        }
    }

    // Nav Link Destinations/Logic
    const toHome = () => {
        
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
        handleNavAnimationClick()
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
        handleNavAnimationClick()
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
        handleNavAnimationClick()
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        const page = document.querySelector(props.currentPage)
        page.classList.remove('entry')
        page.classList.add('exit')
        setTimeout(() => {
            props.history.push('/profile/contact')
        }, 1000);
    }

        //HTML 
    return(
        <div className='header'>
            <div className='fixed-top'>
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
                    <div className='mobile-nav-icon'>
                        <FontAwesomeIcon icon={faChevronCircleRight} style={iconStyle} onClick={handleNavAnimationClick}/>
                        <FontAwesomeIcon icon={faChevronCircleRight} style={iconStyle} onClick={handleNavAnimationClick}/>
                        <FontAwesomeIcon icon={faChevronCircleRight} style={iconStyle} onClick={handleNavAnimationClick}/>
                    </div>
                    <ul>
                        <li onClick={() => toHome()} style={mobileNavStyle}>Home</li>
                        <li onClick={() => toAbout()} style={{transitionDelay: '0.2s'}} style={mobileNavStyle}>About</li>
                        <li onClick={() => toPortfolio()} style={{transitionDelay: '0.4s'}} style={mobileNavStyle}>Portfolio</li>
                        <li onClick={() => toContact()} style={{transitionDelay: '0.6s'}} style={mobileNavStyle}>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header