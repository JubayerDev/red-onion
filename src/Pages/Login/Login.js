import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo2.png';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import swal from 'sweetalert';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, Guser] = useSignInWithGoogle(auth);
    const [signInWithGithub, GIuser] = useSignInWithGithub(auth);
    let navigate = useNavigate();

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    const handleGithubSignIn = () => {
        signInWithGithub();
    }

    if (user || Guser || GIuser) {
        swal("Good job!", "Login Successful!", "success");
        navigate('/', { replace: true });
    }

    return (
        <div className='signup-container'>
            <div className="signup-logo">
                <img src={logo} alt="" />
            </div>
            <form onSubmit={handleSubmit} className="signup-container">
                <input onBlur={handleEmail} type="email" name="email" id="email" placeholder='Email' required />
                <input onBlur={handlePassword} type="password" name="password" id="password" placeholder='Password' required />
                <button className="signup-button">Sign In</button>
                <p>New Member? <Link to='/signup'>Sign up</Link></p>
            </form>
            <div className='or__line'>
                <div style={{ height: '1px', width: '150px', backgroundColor: 'black' }} ></div>
                <p>or</p>
                <div style={{ height: '1px', width: '150px', backgroundColor: 'black' }}></div>
            </div>
            <div className="social-btns">
                <button onClick={handleGoogleSignIn}><FcGoogle size={20} /> <span>Google Sign In</span></button>
                <button onClick={handleGithubSignIn}><BsGithub size={20} /><span>Github Sign In</span></button>
            </div>
        </div>
    );
};

export default Login;