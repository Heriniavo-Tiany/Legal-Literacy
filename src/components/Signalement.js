import React, {Component} from "react";

function Signalement() {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <div className="col-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Signaler un incident</h4>
                        <form className="forms-sample">
                            <div className="form-group">
                                <label htmlFor="exampleInputName1">Titre</label>
                                <input type="text" className="form-control" id="exampleInputName1"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleTextarea1">Description</label>
                                <textarea className="form-control" id="exampleTextarea1" rows="4"></textarea>
                            </div>

                            <div className="form-group">
                                <label>Photo</label>
                                <input type="file" name="img[]" className="file-upload-default"/>
                                <div className="input-group col-xs-12">
                                    <input type="text" className="form-control file-upload-info" disabled
                                           placeholder="Upload Image"/>
                                    <span className="input-group-append">
                          <button className="file-upload-browse btn btn-primary" type="button">Upload</button>
                        </span>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleSelectGender">Etat</label>
                                <select className="form-control" id="exampleSelectGender">
                                    <option>Planifié</option>
                                    <option>En Cours</option>
                                    <option>Déja fait</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleSelectGender">Province</label>
                                <select className="form-control" id="exampleSelectGender">
                                    <option>Antananarivo</option>
                                    <option>Mahajanga</option>
                                    <option>Toamasina</option>
                                    <option>Tulear</option>
                                    <option>Fianarantsoa</option>
                                    <option>Atsiranana</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleSelectGender">Type</label>
                                <select className="form-control" id="exampleSelectGender">
                                    <option>Traffic de bois</option>
                                    <option>raffic d'animaux</option>
                                    <option>Incendie</option>
                                    <option>Extraction industrielles nuisants</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary mr-2">Submit</button>
                            <button className="btn btn-light">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Signalement;