import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
    
    return(
        <div className='header'>
            <div className='links'>
                <Link><h3>About</h3></Link>
                <Link><h3>Portfolio</h3></Link>
                <Link><h3>Contact</h3></Link>
            </div>
        </div>
    )
}

export default Header