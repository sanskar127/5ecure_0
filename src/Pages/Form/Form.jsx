import React from 'react'
import './stylesheet.css'
import ReactScrollWheelHandler from 'react-scroll-wheel-handler'
import Login from '../../Components/Login'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const navigate = useNavigate()
    return (
        <ReactScrollWheelHandler
        upHandler={() => navigate('/')}>
            <div className='bar'>
                <Login/>
                <div className="switchTo">
                    <button>Create an Account</button>
                    <button>Log in with Google</button>
                </div>
            </div>
        </ReactScrollWheelHandler>
    )
}

export default Form
