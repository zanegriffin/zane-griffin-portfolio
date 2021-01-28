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
                    <hr></hr>
                    <p>I make sure the best practices are used for speed, performance, and functionality.</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faMobileAlt} />
                    <h1>mobile first</h1>
                    <hr></hr>
                    <p>The world has gone mobile, and so should you. Let's make sure you don't have any bugs when viewed from a cell phone.</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPencilRuler} />
                    <h1>web design</h1>
                    <hr></hr>
                    <p>I will design your site to pixel perfection to make sure it is a reflection of you or your company.</p>
                </div>
            </div>
            <div className='line'></div>
            <div className='me'>
                <div className='image'>

                </div>
                <div className='words'>
                    <div>
                    <h1>Hello!</h1>
                    <h3>I am a baker turned coder with a drive to make awesome responsive websties</h3>
                    <p>I learned my basic knowledge through General Assembly's Software Engineering Immersive Bootcamp. After graduating at the end of November 2020, I have been continuing my education through various internet resources.</p>
                    <p>I started out as a baker and moved into cake decorating for my everyday job while I was in college. When I discovered some coding resources online, I realized I was in the wrong field. <span>Frontend</span>, <span>backend</span>, <span>fullstack</span>, and <span>UI design</span> have all been a blast for me since following this dream. I want others to know that they too have what it takes to jump in.</p>
                    </div>
                </div>
            </div>
            <div className='skills'>
                <div>
                    <FontAwesomeIcon icon={faHtml5} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faCss3} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faJsSquare} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faNodeJs} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faBootstrap} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faReact} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faFigma} />
                </div>
            </div>
        </div>
    )
}

export default About