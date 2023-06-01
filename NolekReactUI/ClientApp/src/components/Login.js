import React, { Component } from 'react';
import './Login.css';
import nolek from './Nolek-logo.png';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('https://www.shiggy.dk/api/Users')
            .then(response => response.json())
            .then(data => {
                const user = data.find(user => user.name === this.state.name && user.password === this.state.password);
                if (user) {
                    // Kode mangler - Håndter et succesfuldt login her
                    this.props.history.push('/menu');
                } else {
                    // Kode mangler - Håndter et forkert login forsøg her
                }
            })
            .catch(error => {
                console.error(error);
            });

        const data = {
            name: this.state.name,
            password: this.state.password
        };
        fetch('https://www.shiggy.dk/api/Users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                // Kode mangler - håndter respons fra API´en her
            })
            .catch(error => {
                console.error(error);
            });
    }


    render() {
        return (
            <div className="Login">
                <header className="Login-header">
                    <img src={nolek} className="Login-logo" alt="logo" />
                    <p>
                        Service Helper
                    </p>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Navn:
                            <input type="text" value={this.state.name} name="name" onChange={this.handleInputChange} />
                        </label>
                        <label>
                            Kode:
                            <input type="password" value={this.state.password} name="password" onChange={this.handleInputChange} />
                        </label>
                        <button type="submit">Login</button>
                    </form>
                </header>

            </div>
        );
    }
}
