import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

export class Menu extends Component {
    static displayName = Menu.name;

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    // Henter data fra API´en, og fremviser specifikt kun den første kunde og dens releterede info i API´en
    componentDidMount() {
        fetch('https://www.shiggy.dk/api/Customers')
            .then(response => response.json())
            .then(data => {
                const firstCustomer = data[0];
                const groupedData = {
                    [firstCustomer.customerName]: {
                        phoneNumber: firstCustomer.phoneNumber,
                        customerAddress: firstCustomer.customerAddress
                    }
                };
                this.setState({ data: groupedData });
            })
            .catch(error => console.log(error));
    }

    render() {
        const { data } = this.state;

        return (
            <div className="Menu">
                <header className="Menu-header">
                    <p className="Title">Hovedmenu</p>
                    <div className="Teknikernavn">
                        <p>Velkommen Anders Andersen!</p>
                    </div>
                    <div className="Kunde">
                        <p>Næste kunde:</p>
                    </div>
                    <div className="userData">
                        {Object.keys(data).map(customerName => (
                            <div key={customerName}>
                          
                                {customerName}<br />
                                <br />
                                {data[customerName].phoneNumber}<br />
                                <br />
                                {data[customerName].customerAddress} <br />
                                <br />
                            </div>
                        ))}
                    </div>
                    
                    <div className="button-container">
                        <Link to="/login">
                            <button className="Logout">Log ud</button>
                        </Link>
                        <Link to="/opgave1">
                            <button className="Continue">Videre</button>
                        </Link>
                    </div>
                </header>
            </div>
        );
    }
}
