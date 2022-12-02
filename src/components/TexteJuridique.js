import React, { Component } from "react";

function TexteJuridique(props) {
    return (
        <tbody>
            <tr>
                <td>{props.texte.type.name + props.texte.number}</td>
                <td>{props.texte.subject}</td>
                <td>{props.texte.date}</td>
                <td>{props.texte.state}</td>
                <td>{props.texte.type.name}</td>
                <td><a>heart</a></td>
            </tr>
            <tr colspan='5'><td><p><b>Notes : </b>{props.texte.notes}</p></td></tr>
            <tr colspan='5'><td><p><b>Sources : </b>{props.texte.sources}</p></td></tr>
            <tr colspan='5'><td><p><b>Categorie : </b>{props.texte.category.name}</p></td></tr>
        </tbody>
    )
};

export default TexteJuridique;