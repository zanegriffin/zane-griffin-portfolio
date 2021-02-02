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
    axios({
        method: 'post',
        url: 'https://email-zanegriffin.herokuapp.com/sendtome',
        headers: {'Content-Type': 'application/json'},
        data: JSON.stringify(info)
    })
   }

    return(
        <div className='contact entry'>
            <h3>Let's connect and chat!</h3>
            <p>Fill out the form and see what I've been up to on social media!</p>
            <form>
                <label>Who are you?</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                ></input>
                <label>How can I reach you?</label>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                ></input>
                <label>What type of work?</label>
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    onChange={handleChange}
                ></input>
                <label>All the gritty details.</label>
                <textarea
                    type="text"
                    name="Text"
                    placeholder="Details"
                    onChange={handleChange}
                ></textarea>
                <button onClick={handleSubmit}>Send</button>
            </form>
            <div className='social-media'>
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faCodepen} />
            </div>
        </div>
    )
}

export default Contact