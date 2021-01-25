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
            <h1>Meh</h1>
        </div>
    )
}

export default Contact