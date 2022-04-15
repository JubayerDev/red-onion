import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className='logo'>
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className='nav-items'>
                <FiShoppingCart size={20} />
                <Link to='/login'>Login</Link>
                <Link to='/signup'>
                    <button className="signup-btn">Sign up</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;