import React from 'react'
import './stylesheet.css'

const Login = () => {
    return (
        <div className='Login'>
            <form action="/">
                <h3>Log into Dashboard</h3>
                <div className="input">
                    <input type="text" name="uname" placeholder='Username' />
                </div>

                <div className="input">
                    <input type="password" name="passwd" placeholder='Password' />
                </div>

                {/* <div className="input gg">
                    <input type="submit" value="Login" />
                </div> */}
                <button className="test">Login</button>
            </form>
        </div>
    )
}

export default Login
