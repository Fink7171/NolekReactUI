import React, { Component } from 'react';
import './OpgaveInfo.css';

export class OpgaveInfo extends Component {
    static displayName = OpgaveInfo.name;

    render() {
        return (
            <div className="OpgaveInfo">
                <header className="Info-header">

                    <p className="Title">
                        Opgave Status
                    </p>
                    <textfield id="outlined-basic" label="Outlined" variant="outlined" />
                    <form>
                        <label>
                            Kundenavn:
                            <input type="text" defaultValue="Navn Inc." name="navn" />
                        </label>
                        <label>
                            Dato:
                            <input type="text" defaultValue="12/02/2023" name="date" />
                        </label>
                        <br />
                        <br />
                        <br />
                        <label>
                            Kundelokation:
                            <input type="text" defaultValue="AdresseGade 35" name="location" />
                        </label>
                        <div className="opgavedele">
                            <label>
                                Opgave Beskrivelse:
                                <textarea
                                    name="opgaveBeskrivelse"
                                    defaultValue="Operation X har brug for et nyt oliefilter"
                                    rows={4}
                                    cols={40}
                                />
                            </label>
                            <label>
                                Vigtige dele:
                                <textarea
                                    name="vigtigeDele"
                                    defaultValue="-1x Oliefilter&#13;&#10;-2x luftfilter"
                                    rows={4}
                                    cols={40}
                                />
                            </label>
                        </div>
                    </form>
                    <br />
                    <div className="button-container">
                        <button className="Logout">Log ud</button>
                        <button className="Continue">Videre</button>
                    </div>
                </header>
            </div>
        );
    }
}