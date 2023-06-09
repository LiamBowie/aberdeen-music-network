import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState(null);

    const login = async (event) => {
        event.preventDefault();
        const data = { username, password }
        const response = await fetch('http://localhost:4001/api/user/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data)
        });
        const json = await response.json();
        console.log(json);
    }
    const register = async (event) => {
        event.preventDefault();
        const data = { username, password }
        const response = await fetch('http://localhost:4001/api/user/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data)
        });
        const json = await response.json();
        console.log(json);
    }
    const getUser = async (event) => {
        event.preventDefault();
        console.log('Awaiting promise');
        const response = await fetch('http://localhost:4001/api/user', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include'
        });
        const json = await response.json();
        setData(json);
        console.log(json);
    }

    return (
        <div className="screen">
            <div className="card">
                <h1 className='title'>Login</h1>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' placeholder='Type your username' onChange={e => setUsername(e.target.value)}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Type your password' onChange={e => setPassword(e.target.value)} />
                    <div className='submitButtons'>
                        <button onClick={login}>Login</button>
                        <button onClick={register}>Register</button>
                        <button onClick={getUser}>Log user</button>
                    </div>
                    {
                        data ? <p>Hello, {data.username}</p> : null
                    }
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
