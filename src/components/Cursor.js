import React, {useEffect} from 'react'
import './style/Cursor.scss'
const Cursor = () => {
    
    const onMouseMove = (e) =>{
        document.querySelector('.cursor').style.left = e.pageX + 'px'
        document.querySelector('.cursor').style.top = e.pageY + 'px'
        const left = e.pageX + 10
        const right = e.pageY + 10
        document.querySelector('.cursor-shadow').style.left = left + 'px'
        document.querySelector('.cursor-shadow').style.top = right + 'px'
    }
    
    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove)
    })

    return(
        <div>
            <div className='cursor-shadow'></div>
            <div className='cursor'></div>
        </div>
    )
}

export default Cursor