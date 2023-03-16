import React, { useState } from 'react';
import "./login.css";

function LoginForm() {


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
                        <button>Login</button>
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

export default LoginForm;
