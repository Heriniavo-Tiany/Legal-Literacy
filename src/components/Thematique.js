import React, {Component} from "react";
import { getThematiques } from "../classes/Util";
import {t} from "i18next";

const json = getThematiques();

class Thematique extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-8 grid-margin">
                    <div className="content-wrapper">
                        <h2 className="card-title">{t('Thématiques Fréquentes')}</h2>
                        <div className="row">
                            <ThematiqueFrequent id="1"/>
                            <ThematiqueFrequent id="2"/>
                            <ThematiqueFrequent id="3"/>
                            <ThematiqueFrequent id="4"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 grid-margin">
                    <div className="content-wrapper">
                        <h2 className="card-title">{t('Toutes les Thématiques')}</h2>
                        <ListThematiques/>
                    </div>
                </div>
            </div>


        )
    }


}

function ListThematiques(props) {
    const list = []
    json.forEach((item) => {
        list.push(<li>{t(item.name)}</li>)
    })

    return (
        <div className="card">
            <div className="card-body">
                <ul>
                    {list}
                </ul>
            </div>
        </div>
    );
}


function ThematiqueFrequent(props) {
    return (

        <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{t(json[props.id].name)}</h4>
                    <p className="card-description">
                        {json[props.id].description}
                    </p>
                </div>
            </div>
        </div>
    );

}


export default Thematique;