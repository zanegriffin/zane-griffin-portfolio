import React, {useEffect} from 'react'

const About = (props) => {
    useEffect(() => {
        settingState()
   }, [])

   const settingState = () => {
       props.setCurrentPage('.about')
   }
    return(
        <div className='about entry'>
            <h1>Hello</h1>
        </div>
    )
}

export default About