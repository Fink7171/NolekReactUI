import React, { Component } from 'react';
import './Opgave1.css';
import { Link } from 'react-router-dom';

export class Opgave1 extends Component {
    static displayName = Opgave1.name;


    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        fetch('https://www.shiggy.dk/api/CustomersMachinesParts')
            .then(response => response.json())
            .then(data => {
                const firstCustomer = data[0];
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

    render() {
        const { data } = this.state;

        const handleFileUpload = (event) => {
            const file = event.target.files[0];
            // Do something with the file, e.g. upload it to a server
        }

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
                        <input type="file" accept="image/*" multiple onChange={handleFileUpload} />
                    </div>

                    <div className="Kommentare">
                        <label>
                            Kommentarer:
                            <textarea
                                name="kommentare"
                                defaultValue="Det brugte oliefilter havde mere slid end normalt...."
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