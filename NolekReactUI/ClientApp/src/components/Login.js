import React, { Component } from 'react';
import './Login.css';
import nolek from './Nolek-logo.png';

export class Login extends Component {
    static displayName = Login.name;

    render() {
        return (
            <div className="Login">
                <header className="Login-header">
                    <img src={nolek} className="Login-logo" alt="logo" />
                    <p>
                        Service Helper
                    </p>
                    <textfield id="outlined-basic" label="Outlined" variant="outlined" />
                    <form>
                        <label>
                            Navn:
                            <input type="text" defaultValue="Asd123" name="name" />
                        </label>
                        <label>
                            Kode:
                            <input type="text" defaultValue="XXXXXXXXXX" name="password" />
                        </label>
                    </form>
                    <button>Login</button>
                </header>

            </div>
        );
    }
}