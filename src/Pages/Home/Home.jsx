import React from 'react'
import ReactScrollWheelHandler from 'react-scroll-wheel-handler'
import './stylesheet.css'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
    const navigate = useNavigate()
    return (
        <ReactScrollWheelHandler
        downHandler={() => navigate('/login')}>
            <div className='welcome'>
                <h1>Welcome!</h1>
                <div className="navigate">
                    <span>Scroll down</span>
                    <button onClick={() => console.log("Hello There")}></button>
                </div>
            </div>
        </ReactScrollWheelHandler>
    )
}

export default Welcome
