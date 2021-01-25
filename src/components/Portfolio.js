import React, {useEffect}  from 'react'

const Portfolio = (props) => {
    useEffect(() => {
        settingState()
   }, [])

   const settingState = () => {
       props.setCurrentPage('.portfolio')
   }
    return(
        <div className='portfolio entry'>
            <h1>Goodbye</h1>
        </div>
    )
}

export default Portfolio