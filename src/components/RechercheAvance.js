import React, {Component} from "react";
import {getTextesJuridiques, getThematiques} from '../classes/Util';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import TextesJuridiques from "./TextesJuridiques";
import {search} from "./data";

const json = getThematiques();

// const textes = getTextesJuridiques();


/*-----------------------------------------------------*/
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var s = urlParams.get('s');
var textes = getTextesJuridiques();
if (s !== null) {
    textes = search(urlParams.get('keyword'), "2011-01-01", "2016-01-01", urlParams.get('type'), urlParams.get('category'), null);
}


/*-----------------------------------------------------*/


const animatedComponents = makeAnimated();


const types = [
    {
        "value": "1",
        "label": "Loi constitutionnelle"
    },
    {
        "value": "2",
        "label": "Loi organique"
    },
    {
        "value": "3",
        "label": "Loi"
    },
    {
        "value": "4",
        "label": "Ordonnance"
    },
    {
        "value": "5",
        "label": "Décret"
    },
    {
        "value": "6",
        "label": "Arrêté"
    },
    {
        "value": "7",
        "label": "Circulaire"
    },
    {
        "value": "8",
        "label": "Décision"
    },
    {
        "value": "9",
        "label": "Instruction"
    },
    {
        "value": "10",
        "label": "Note"
    },
    {
        "value": "11",
        "label": "Délibération"
    },
    {
        "value": "12",
        "label": "Avis"
    },
    {
        "value": "13",
        "label": "Palmarès"
    },
    {
        "value": "14",
        "label": "Procès-verbal"
    }
]

function RechercheAvance() {
    return (
        <div><br/><br/><br/>
            <div className="row">
                <div className="col-md-3 grid-margin">
                    <div className="content-wrapper">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Filtre</h4>
                                <form className="row g-3" action="" method="get">
                                    <input type="text" name="s" value="e" hidden />
                                    <div className="col-12">
                                        <label htmlFor="inputdate" className="form-label">Mot clé</label>
                                        <input type="text" className="form-control" id="inputdate" name="keyword"/>
                                        <br/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputdate" className="form-label">Date</label>
                                        <input type="date" className="form-control" id="inputdate"/>
                                        <br/>
                                    </div>
                                    <div className="col-12">
                                        <input type="date" className="form-control" id="inputdate2"/>
                                        <br/>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="inputType" className="form-label">Type</label>
                                        <Select
                                            name="type"
                                            id="inputType"
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            defaultValue={[]}
                                            isMulti
                                            options={types}
                                        />
                                        <br/>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="inputThematique" className="form-label">Thématique</label>
                                        <Select
                                            name="category"
                                            id="inputThematique"
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            defaultValue={[]}
                                            isMulti
                                            options={json}
                                        />
                                        <br/>
                                    </div>


                                    <div className="col-12">
                                        <label className="form-label">State</label>
                                        <div className="col-sm-10">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="state"
                                                       id="chk1" value="0"/>
                                                <label className="form-check-label" htmlFor="chk1">
                                                    En Vigueur
                                                </label>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="state"
                                                       id="chk2" value="1"/>
                                                <label className="form-check-label" htmlFor="chk2">
                                                    Aborgé
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                    <input type="submit"/>
                                </form>


                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-9 grid-margin">
                    <div className="content-wrapper">
                        <div className="card">
                            <div className="card-body">
                                <div className="row g-9">
                                    <TextesJuridiques textes={textes}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RechercheAvance;