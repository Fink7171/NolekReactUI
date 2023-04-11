import React, { useState } from 'react';
import './Login.css';
import nolek from './Nolek-logo.png';

export class Login extends Component {
    static displayName = Login.name;
    render() {
        return (

function LoginForm() {
    <img src={nolek} className="Login-logo" alt="logo" />
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (response.ok) {
            // Redirect user to dashboard or home page
        } else {
            // Handle error and display message to user
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
