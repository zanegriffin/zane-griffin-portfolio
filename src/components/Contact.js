import React, {useEffect, useState}  from 'react'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faTwitter, faLinkedin, faCodepen} from '@fortawesome/free-brands-svg-icons'
import './style/Contact.scss'

const Contact = (props) => {
    
    useEffect(() => {
        settingState()
   }, [])

   const settingState = () => {
       props.setCurrentPage('.contact')
   }

   const [formInfo, setFormInfo] = useState({})

   const handleChange = (e) => {
       
    const name = e.target.name;
    setFormInfo({
        ...formInfo,
        [name]: e.target.value,
    })
    console.log(formInfo)
   }

   const handleSubmit = (e) => {
    e.preventDefault()
    sendEmail(formInfo)
   }

   const sendEmail = (info) => {
       
    if(info.name === undefined || info.email === undefined || info.subject === undefined || info.text === undefined){
        alert('Form not complete')
    } else {
        axios({
            method: 'post',
            url: 'https://email-zanegriffin.herokuapp.com/sendtome',
            headers: {'Content-Type': 'application/json'},
            data: JSON.stringify(info)
        })
        let inputs = document.querySelectorAll('.contact-input')
        inputs.forEach(input => {
            input.value = ''
        })
        alert('Thank you! I will get back to you soon!')
    }
   }

    return(
        <div className='contact entry'>
            <h3>Let's connect and chat!</h3>
            <p>Fill out the form and see what I've been up to on social media!</p>
            <form action='https://mailthis.to/Zane Griffin' method='POST' encType='multipart/form-data'>
                <label>Who are you?</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    className='contact-input'
                ></input>
                <label>How can I reach you?</label>
                <input type="email" name="_replyto" placeholder="Your email" className='contact-input'></input>
                <label>What type of work?</label>
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className='contact-input'
                ></input>
                <label>All the gritty details.</label>
                <textarea
                    type="text"
                    name="message"
                    placeholder="Details"
                    onChange={handleChange}
                    className='contact-input'
                ></textarea>
                <input type="hidden" name="_subject" value="Contact form submitted! Thank You!"></input>
                <input type="hidden" name="_honeypot" value=""></input>
                <input type="hidden" name="_confirmation" value=""></input>
                <input type='submit' value='Send'></input>
            </form>
            <div className='social-media'>
                <a href='https://twitter.com/ZaneBGriffin' target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
                <a href='https://www.linkedin.com/in/zane-griffin/' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href='https://github.com/zanegriffin' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                <a href='https://codepen.io/zanegriffin' target='_blank'><FontAwesomeIcon icon={faCodepen} /></a>
            </div>
        </div>
    )
}

export default Contact