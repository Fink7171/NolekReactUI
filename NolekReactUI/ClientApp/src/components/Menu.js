import React, { Component } from 'react';
import './Menu.css';

export class Menu extends Component {
    static displayName = Menu.name;

    render() {
        return (
            <div className="Menu">
                <header className="Menu-header">

                    <p className="Title">
                        Hovedmenu
                    </p>
                    <div className="Teknikernavn">
                        <p>Velkommen Anders Andersen!</p>
                    </div>
                    <div className="Opgave">
                        <p>Opgave</p>
                    </div>
                    <br />
                    <textfield id="outlined-basic" label="Outlined" variant="outlined" />
                    <form>
                        <label>
                            Kundenavn:
                            <input type="text" defaultValue="Navn Inc." name="navn" />
                        </label>
                        <label>
                            Kundelokation:
                            <input type="text" defaultValue="AdresseGade 35" name="location" />
                        </label>
                        <br />
                        <br />
                        <br />
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