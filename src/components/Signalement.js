import React, { Component } from "react";

function Signalement() {
    return (
        <div>
            <form>
                <input type={"text"} name={"title"} placeholder={"Titre"} /><br />

                <textarea name="description" placeholder="Description..."></textarea><br />

                <input type={"text"} name={"description"} placeholder={"Description"} /><br />

                <label>Photo : </label><input type={"file"} name={"proof"} /><br />

                <select name="idEtat">
                    <option value={1}>Planifie</option>
                    <option value={2}>En cours</option>
                    <option value={3}>Deja fait</option>
                </select><br />

                <select name="idRegion">
                    <option value={1}>Antananarivo</option>
                    <option value={2}>Mahajanga</option>
                    <option value={3}>Toamasina</option>
                    <option value={4}>Tulear</option>
                    <option value={5}>Fianarantsoa</option>
                    <option value={6}>Atsiranana</option>
                </select><br />

                <select name="idType">
                    <option value={1}>Traffic de bois</option>
                    <option value={2}>Traffic d'animaux</option>
                    <option value={3}>Incendie</option>
                    <option value={4}>Extraction industrielles nuisants</option>
                </select><br />

                <input type={"text"} name={"title"} placeholder={"Titre"} /><br />

                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
};

export default Signalement;