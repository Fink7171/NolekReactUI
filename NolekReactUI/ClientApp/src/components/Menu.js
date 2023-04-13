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

    componentDidMount() {
        fetch('https://www.shiggy.dk/api/CustomersMachinesParts/Customers')
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
                    <div className="userData">
                        {Object.keys(data).map(customerName => (
                            <div key={customerName}>
                                <p>Kundenavn:</p>
                                {customerName}<br />
                                <br />
                                <p>Tlf. nummer:</p>{data[customerName].phoneNumber}<br />
                                <br />
                                <p>Kunde adresse:</p>{data[customerName].customerAddress} <br />
                                <br />
                            </div>
                        ))}
                    </div>
                    <div className="Opgave">
                        <textarea
                            name="opgaveBeskrivelse"
                            defaultValue="(Opgave beskrivelse, som systemet henter fra API´en. TBD.)"
                            rows={4}
                            cols={60}
                        />
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
