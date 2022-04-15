import React from 'react';
import './Signup.css';
import logo from '../../images/logo2.png'

const Signup = () => {
    return (
        <div className='signup-container'>
            <div className="signup-logo">
                <img src={logo} alt="" />
            </div>
            <form className="signup-container">
                <input type="text" name="name" id="name" placeholder='Name' />
                <input type="email" name="email" id="email" placeholder='Email' />
                <input type="password" name="password" id="password" placeholder='Password' />
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' />
                <button className="signup-button">Sign Up</button>

            </form>
        </div>
    );
};

export default Signup;