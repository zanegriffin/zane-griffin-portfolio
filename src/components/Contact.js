import React, {useEffect}  from 'react'


const Contact = (props) => {
    useEffect(() => {
        settingState()
   }, [])

   const settingState = () => {
       props.setCurrentPage('.contact')
   }
    return(
        <div className='contact entry'>
            <h1>I'm still under development!</h1>
        </div>
    )
}

export default Contact