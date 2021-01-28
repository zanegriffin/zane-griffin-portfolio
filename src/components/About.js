import React, {useEffect} from 'react'
import './style/About.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLaptopCode, faPencilRuler, faMobileAlt} from '@fortawesome/free-solid-svg-icons'
import {faHtml5, faCss3, faJsSquare, faNodeJs, faBootstrap, faReact, faFigma} from '@fortawesome/free-brands-svg-icons'


const About = (props) => {
    useEffect(() => {
        settingState()
   }, [])

   const settingState = () => {
       props.setCurrentPage('.about')
   }
    return(
        <div className='about entry'>
            <div className='features'>
                <div>
                    <FontAwesomeIcon icon={faLaptopCode} />
                    <h1>web development</h1>
                    <p>I make sure the best practices are used for speed, performance, and functionality.</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faMobileAlt} />
                    <h1>mobile responsive</h1>
                    <p>The world has gone mobile, and so should you. Let's make sure you don't have any bugs when viewed from a cell phone.</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPencilRuler} />
                    <h1>web design</h1>
                    <p>I will design your site to pixel perfection to make sure it is a reflection of you or your company.</p>
                </div>
            </div>
            <div className='me'>
                <div className='image'>

                </div>
                <p>blurb about me and stuff</p>
            </div>
            <div className='skills'>
                <FontAwesomeIcon icon={faHtml5} />
                <FontAwesomeIcon icon={faCss3} />
                <FontAwesomeIcon icon={faJsSquare} />
                <FontAwesomeIcon icon={faNodeJs} />
                <FontAwesomeIcon icon={faBootstrap} />
                <FontAwesomeIcon icon={faReact} />
                <FontAwesomeIcon icon={faFigma} />
            </div>
        </div>
    )
}

export default About