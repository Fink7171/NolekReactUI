import React, { Component } from 'react';
import './Rapport.css';
import Luftfilter from './Luftfilter.jpg';
import Oliefilter from './Olie filter.jpg';
import Plus from './plusicon.png';

export class Rapport extends Component {
    static displayName = Rapport.name;

    render() {
        return (
            <div className="Rapport">
                <header className="Rapport-header">

                    <p className="Title">
                        Opgave Rapport
                    </p>
                    <textfield id="outlined-basic" label="Outlined" variant="outlined" />
                    <form>
                        <div className="deleBrugt">
                            <label>
                                Dele brugt:
                                <textarea
                                    name="deleBrugt"
                                    defaultValue="-2x Oliefilter + 1&#13;-2x luftfilter + 0"
                                    rows={4}
                                    cols={60}
                                />
                            </label>
                        </div>
                        <br />
                        <div className="billeder">
                            <label>
                                Billeder:
                            </label>
                            <img src={Luftfilter} alt="luftfilter" style={{ width: '20%', height: '20%', margin: '0 10px' }} />
                            <img src={Oliefilter} alt="oliefilter" style={{ width: '20%', height: '20%', margin: '0 10px' }} />
                            <img src={Plus} alt="plus" style={{ width: '20%', height: '20%', }} />
                        </div>
                        <div className="tidbrugt">
                            <label>
                                Tid brugt:
                                <textarea
                                    name="tidBrugt"
                                    defaultValue="-Transport 1 time&#13;-Oliefilter udskiftning: 2 timer&#13;-Luftfilter udskiftning: 1 time&#13;-Gennemcheckning af system: 1 time"
                                    rows={6}
                                    cols={40}
                                />
                            </label>
                            <label>
                                Ekstra kommentarer:
                                <textarea
                                    name="bemærkninger"
                                    defaultValue="Oliefilteret havde ekstra slid end normalt."
                                    rows={6}
                                    cols={40}
                                />
                            </label>
                        </div>
                    </form>
                    <br />
                    <div className="button-container">
                        <button className="Back">Tilbage</button>
                        <button className="Send">Indsend</button>
                    </div>
                </header>
            </div>
        );
    }
}