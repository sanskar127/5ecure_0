import React from 'react'
import './stylesheet.css'
import ReactScrollWheelHandler from 'react-scroll-wheel-handler'
import Login from '../../Components/Login'

const Form = () => {
    return (
        <ReactScrollWheelHandler>
            <div className='bar'>
                <Login/>
            </div>
        </ReactScrollWheelHandler>
    )
}

export default Form
