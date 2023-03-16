import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./login.css";

function Login() {


    return (
        <div className="screen">
            <div className="card">
                <h1 className='title'>Login</h1>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' placeholder='Type your username' />
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Type your password' />
                    <div className='submitButtons'>
                        <Link to="/">
                            <button>Login</button>
                        </Link>
                        <button>Register</button>
                    </div>
                </form>
                <span>Or sign up using</span>
                <div className='thirdPartyButtons'> 
                    <button>G</button>
                    <button>T</button>
                    <button>M</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
