import React, { Component } from "react";
import TexteJuridique from "./TexteJuridique";

function TextesJuridiques(props) {
    let result = [];

    props.textes.forEach(texte => {
        result.push(<TexteJuridique texte={texte} />)
    });

    return (
        <div>
            <table>
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
    )
};

export default TextesJuridiques;