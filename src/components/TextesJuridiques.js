import React, { Component } from "react";
import TexteJuridique from "./TexteJuridique";

function TextesJuridiques(props) {
    let result = [];

    props.textes.forEach(texte => {
        result.push(<TexteJuridique texte={texte} />)
    });

    return (

        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Textes Juridiques</h4>
                    <div className="table-responsive">
                        <table className="table ">
                            <thead>
                            <tr>
                                <th>Titre</th>
                                <th>Objet</th>
                                <th>Date</th>
                                <th>Etat</th>
                                <th>Type</th>
                                <th></th>
                            </tr>
                            </thead>
                            {result}
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default TextesJuridiques;