import React from "react";

function addToFavorite(id) {
    let storageName = "favorite";
    let data = JSON.parse(localStorage.getItem(storageName));

    if (data == null) {
        data = [];
    }
    data.push(id);
    data = [...new Set(data)]; // avoid doubling

    localStorage.setItem(storageName, JSON.stringify(data));


    // const fs = require('fs');
    // fs.writeFile('favorite.json', id, (err) => {
    // // writeFile('favorite.json', id, (err) => {
    //     if (err) throw err;
    //     else {
    //         console.log("Add into favorite")
    //     }
    // })
}

function TexteJuridique(props) {
    return (
        <tbody>
            <tr>
                <td>{props.texte.type.name + props.texte.number}</td>
                <td>{props.texte.subject}</td>
                <td>{props.texte.date}</td>
                <td>{props.texte.state}</td>
                <td>{props.texte.type.name}</td>
                <td><button onClick={() => addToFavorite(props.texte.id)}>Favori</button></td>
            </tr>
            <tr><td colSpan={6}><p><b>Notes : </b>{props.texte.notes}</p></td></tr>
            <tr><td colSpan={6}><p><b>Sources : </b>{props.texte.sources}</p></td></tr>
            <tr><td colSpan={6}><p><b>Categorie : </b>{props.texte.category.name}</p></td></tr>
        </tbody>
    )
};

export default TexteJuridique;