import React from 'react';
import logo from '../../images/logo2.png'
import {FiShoppingCart} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='nav-items'>
                <FiShoppingCart size={ 20}/>
                <Link to='/login'>Login</Link>
                <button className="signup-btn">Sign up</button>
            </div>
        </nav>
    );
};

export default Navbar;