import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo2.png';
import './Signup.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');


    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);

    const handleName = e => {
        setName(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError(<p>Password didn't matched</p>)
        } else {
            createUserWithEmailAndPassword(email, password);
        }
        if (user) {
            toast.success('Account Created!');
        }
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    const handleGithubSignIn = () => {
        signInWithGithub();
    }

    return (
        <div className='signup-container'>
            <div className="signup-logo">
                <img src={logo} alt="" />
            </div>
            <form onSubmit={handleSubmit} className="signup-container">
                <input onBlur={handleName} type="text" name="name" id="name" placeholder='Name' />
                <input onBlur={handleEmail} type="email" name="email" id="email" placeholder='Email' required />
                <input onBlur={handlePassword} type="password" name="password" id="password" placeholder='Password' required />
                <input onBlur={handleConfirmPassword} type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' required />
                {error}
                <button className="signup-button">Sign Up</button>
                <p>Already Have an Account? <Link to='/login'>Login</Link></p>
            </form>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
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

export default Signup;