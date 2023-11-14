import React from 'react'
import './stylesheet.css'

const Login = () => {
    return (
        <div className='Login'>
            <form action="/">
                <h3>Log into Dashboard</h3>
                <div className="form-input">
                    <input type="text" name="uname" placeholder='Username' />
                </div>

                <div className="form-input">
                    <input type="password" name="passwd" placeholder='Password' />
                </div>

                <div className="form-input">
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    )
}

export default Login
