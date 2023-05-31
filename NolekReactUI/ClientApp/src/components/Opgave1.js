import React, { Component } from 'react';
import './Opgave1.css';
import { Link } from 'react-router-dom';

export class Opgave1 extends Component {
    static displayName = Opgave1.name;

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            files: []
        };
    }

    componentDidMount() {
        fetch('https://www.shiggy.dk/api/Machines')
            .then(response => response.json())
            .then(data => {
                const firstCustomer = data[1];
                const groupedData = {
                    [firstCustomer.partsMustChange]: {
                        machineName: firstCustomer.machineName,
                        amountPartMachine: firstCustomer.amountPartMachine,
                    }
                };
                this.setState({ data: groupedData });
            })
            .catch(error => console.log(error));
    }

    handleFileUpload = (event) => {
        const files = Array.from(event.target.files);
        this.setState({ files: files });
    }

    handleFileSend = () => {
        const formData = new FormData();
        this.state.files.forEach(file => {
            formData.append('files[]', file);
        });
        fetch('https://www.shiggy.dk/api/Services', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
                
                if (data.status === 'success') {
                    console.log('Picture sent successfully');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    

    render() {
        const { data } = this.state;

        return (
            <div className="Opgave1">
                <header className="Opgave1-header">
                    <p className="Title">
                        Opgave #1
                    </p>
                    <textfield id="outlined-basic" label="Outlined" variant="outlined" />

                    <div className="opgave">
                        {Object.keys(data).map(partsMustChange => (
                            <div key={partsMustChange}>
                                <p>Del der skal skiftes:</p>
                                <span>{partsMustChange} på {data[partsMustChange].machineName}</span>
                            </div>
                        ))}
                    </div>
                    <label>
                        (Link til Manual til opgaven)
                    </label>

                    <div className="opgavedele">
                        {Object.keys(data).map(partsMustChange => (
                            <div key={partsMustChange}>
                                <p>Vigtige dele:</p>
                                <span>{partsMustChange} X {data[partsMustChange].amountPartMachine}</span>
                            </div>
                        ))}
                    </div>

                    <div className="billeder">
                        <label>
                            Billeder:
                        </label>
                        <input type="file" accept="image/*" multiple onChange={this.handleFileUpload} />
                        <button onClick={this.handleFileSend}>Send billeder</button>
                    </div>

                    <div className="Kommentare">
                        <label>
                            Kommentarer:
                            <textarea
                                name="kommentare"
                                rows={4}
                                cols={40}
                            />
                        </label>
                    </div>

                    <div className="button-container">
                        <Link to="/menu">
                            <button className="Back">Tilbage</button>
                        </Link>
                        <Link to="/rapport">
                            <button className="Continue">Videre</button>
                        </Link>
                    </div>
                </header>
            </div>
        );
    }
}
