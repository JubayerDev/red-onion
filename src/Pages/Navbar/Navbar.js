import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo2.png';
import './Navbar.css';

const Navbar = () => {
    const [user] = useAuthState(auth);
    console.log(user?.photoURL);

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <nav>
            <div className='logo'>
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className='nav-items'>
                <FiShoppingCart size={20} />
                <Link to='/addfood'>
                    Add Food
                </Link>
                {
                    user ? <img className='userPhoto' src={ user?.photoURL} alt='user'/> : <Link to='/login'>Login</Link>
                }
                {user ? 
                    <button onClick={handleSignOut} className='signup-btn'>Sign out</button>
                : <Link to='/signup'>
                    <button className="signup-btn">Sign up</button>
                </Link>}
            </div>
        </nav>
    );
};

export default Navbar;