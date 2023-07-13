import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {login, signup} from '../../actions/auth'
import './Auth.css'


const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSwitch = () => {
        setIsSignup(!isSignup);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if(!name && !password){
                alert("Enter all the details.")
            }
            if(isSignup){
                if(!name){
                    alert('Enter name.')
                }
                dispatch(signup({name,password},navigate));
            }else{
                dispatch(login({name,password},navigate));
            }
        } catch (error) {
            console.log(error.message)
        }

    }

    return (
        <div>
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h3 className='auth-heading'>{isSignup ? 'Sign-up' : 'Login'}</h3>
                    {
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="name" id="name" name="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                        </div>
                    }
               
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit">{isSignup ? 'Sign up' : 'Log In'}</button>
                    <p>
                        {isSignup ? 'Already have an account?' : "Don't have an account?"}
                        <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log in" : "Sign up"}</button>
                    </p>
                </form>

            </div>
        </div>
    )
}

export default Auth
