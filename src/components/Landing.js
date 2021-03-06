import React, {useEffect} from 'react'
import Typewriter from 'typewriter-effect'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronCircleDown} from '@fortawesome/free-solid-svg-icons'
import './style/Landing.scss'

const Landing = (props) => {

    useEffect(() => {
         settingState()
    }, [])

    const settingState = () => {
        props.setCurrentPage('.landing')
    }

    const handleClick = () => {
        const landing = document.querySelector('.landing')
        landing.classList.add('exit')
        setTimeout(() => {
            props.history.push('/profile/about')
        }, 1000);
    }

    return(
        <div className='landing'>
            <div className='spinner-container'>
                <div className='spinner-slide'>
                    <div className='spinner-shadow'></div>
                    <div className='spinner'></div>
                </div>
                <div className='spinner-slide'>
                    <div className='spinner-shadow'></div>
                    <div className='spinner'></div>
                </div>
                <div className='spinner-slide'>
                    <div className='spinner-shadow'></div>
                    <div className='spinner'></div>
                </div>
            </div>
            <div className='sideblock'></div>
            <div className='main-content'>
                <div className='name-block' >
                    <h1>Hi, I'm Zane.</h1>
                    <p>I'm a&nbsp;<Typewriter options={{
                            strings: ['software engineer', 'cat person', 'front end developer', 'food lover'],
                            autoStart: true,
                            loop: true,
                            }}/>
                    </p> 
                </div>
                <div className='arrows'>
                   <div className='icons'>
                    <FontAwesomeIcon icon={faChevronCircleDown}  />
                    <FontAwesomeIcon icon={faChevronCircleDown}  />
                    <FontAwesomeIcon icon={faChevronCircleDown}  />
                   </div>
                    <a onClick={() => handleClick()} >click here</a>
                </div>
            </div>
        </div>
    )
}

export default Landing