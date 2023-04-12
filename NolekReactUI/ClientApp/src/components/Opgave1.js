import React, { Component } from 'react';
import './Opgave1.css';
import Bog from './Bog.png';
import Oliefilter from './Olie filter.jpg';
import Plus from './plusicon.png';
import { Link } from 'react-router-dom';

export class Opgave1 extends Component {
    static displayName = Opgave1.name;

    render() {
        return (
            <div className="Opgave1">
                <header className="Opgave1-header">

                    <p className="Title">
                        Opgave #1
                    </p>
                    <textfield id="outlined-basic" label="Outlined" variant="outlined" />
                    <form>
                        <div className="opgave">
                            <label>
                                Udskift 1x Oliefilter
                                <br />
                                <img src={Bog} alt="example image" style={{ width: '10%', height: '10%', margin: '0 10px' }} />
                            </label>
                        </div>

                        <label>
                            (Link til Manual til opgaven)
                        </label>


                        <br />
                        <div className="opgavedele">
                            <label>
                                Vigtige dele:
                                <textarea
                                    name="vigtigeDele"
                                    defaultValue="-1x Oliefilter"
                                    rows={4}
                                    cols={40}
                                />
                            </label>
                        </div>
                        <br />
                        <div className="billeder">
                            <label>
                                Billeder:
                            </label>
                            <img src={Oliefilter} alt="oliefilter" style={{ width: '20%', height: '20%', margin: '0 10px' }} />
                            <img src={Plus} alt="plus" style={{ width: '20%', height: '20%', }} />
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
                    </form>

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