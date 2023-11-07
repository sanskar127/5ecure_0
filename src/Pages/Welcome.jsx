import React from 'react'
import ReactScrollWheelHandler from 'react-scroll-wheel-handler'
import './welcome.css'

const Welcome = () => {
    return (
        <ReactScrollWheelHandler
        downHandler={() => console.log("Hello World")}>
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
