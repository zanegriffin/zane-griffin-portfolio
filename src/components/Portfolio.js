import React, {useEffect}  from 'react'
import './style/Portfolio.scss'

const Portfolio = (props) => {
    useEffect(() => {
        settingState()
   }, [])

   const settingState = () => {
       props.setCurrentPage('.portfolio')
   }
    return(
        <div className='portfolio entry'>
            <div className='project'>
                <img src={'https://res.cloudinary.com/feedmejoy/image/upload/v1607034539/Screenshot_2020-12-03_162831_vjs23e.png'} />
                <div>
                    <h1>Racer's Choice Inc.</h1>
                    <p>A remake of rciracing.com with a modern touchup. Racer's Choice is a manufacturer that provides custom fuel cells and racing equipment. This mock site utilizes React, react-reveal animation library, and Contentful.</p>
                </div>
            </div>
            <div className='project'>
                <img src={'https://res.cloudinary.com/feedmejoy/image/upload/v1607035174/Screenshot_2020-12-03_163917_nojfgr.png'} />
                <div>
                    <h1>MUNCH</h1>
                    <p>A classic recipe browser with a dark mode aesthetic. The data is pulled in from an API called TheMealDB and uses a front built in React.</p>
                </div>
            </div>
            <div className='project'>
                <img src={'https://res.cloudinary.com/feedmejoy/image/upload/v1607035089/Screenshot_2020-12-03_163755_iavtxc.png'} />
                <div>
                    <h1>Dunwich Manor</h1>
                    <p>Are video games today too advanced for you? Take a step back with this old school point and click adventure game built with a MERN stack.</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio