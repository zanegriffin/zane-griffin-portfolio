import React, {useEffect}  from 'react'

const Services = (props) => {
    useEffect(() => {
        settingState()
   }, [])

   const settingState = () => {
       props.setCurrentPage('.services')
   }
    return(
        <div className='services entry'>
            <div className='links'>
                
            </div>
        </div>
    )
}

export default Services