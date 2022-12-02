import React, {Component} from "react";

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
// import { colourOptions } from '../data';

const animatedComponents = makeAnimated();

const colourOptions = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'}
]

/*export default function AnimatedMulti() {
    return (
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={[colourOptions[4], colourOptions[5]]}
            isMulti
            options={colourOptions}
        />
    );
}*/

function RechercheAvance() {
    return (
        <div className="row">
            <div className="col-md-3 grid-margin">
                <div className="content-wrapper">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Filtre</h4>
                            <form className="row g-3">
                                <div className="col-12">
                                    <label htmlFor="inputdate" className="form-label">Date</label>
                                    <input type="date" className="form-control" id="inputdate"/>
                                    <br/>
                                </div>


                                <div className="col-12">
                                    <label htmlFor="inputType" className="form-label">Type</label>
                                    <Select
                                        id="inputType"
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        defaultValue={[colourOptions[4], colourOptions[5]]}
                                        isMulti
                                        options={colourOptions}
                                    />
                                    <br/>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="inputThematique" className="form-label">Thématique</label>
                                    <Select
                                        id="inputThematique"
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        defaultValue={[colourOptions[4], colourOptions[5]]}
                                        isMulti
                                        options={colourOptions}
                                    />
                                    <br/>
                                </div>


                                <div className="col-12">
                                    <label className="form-label">State</label>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="state"
                                                   id="chk1" value="EnVigueur"/>
                                            <label className="form-check-label" htmlFor="chk1">
                                                En Vigueur
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="state"
                                                   id="chk2" value="aborge"/>
                                            <label className="form-check-label" htmlFor="chk2">
                                                Aborgé
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RechercheAvance;