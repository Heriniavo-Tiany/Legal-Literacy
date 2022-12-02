import React, {Component} from "react";
import {Link} from 'react-router-dom'

const json = [
    {
        "id": "1",
        "name": "Corruption et Engagement d’un représentant du gouvernement",
        "description": "Adipisci aperiam architecto autem, consectetur delectus eaque eligendi facilis fuga harum libero maiores minima nesciunt nulla quisquam repellat soluta voluptatem. At autem eum facere numquam optio perspiciatis, sed sequi sit!",
        "icon": "",
        "common": false
    },
    {
        "id": "2",
        "name": "Déontologie et bonne conduite des agents publics",
        "description": "Adipisci aperiam architecto autem, consectetur delectus eaque eligendi facilis fuga harum libero maiores minima nesciunt nulla quisquam repellat soluta voluptatem. At autem eum facere numquam optio perspiciatis, sed sequi sit!",
        "icon": "",
        "common": false
    },
    {
        "id": "3",
        "name": "Faune",
        "description": "Adipisci aperiam architecto autem, consectetur delectus eaque eligendi facilis fuga harum libero maiores minima nesciunt nulla quisquam repellat soluta voluptatem. At autem eum facere numquam optio perspiciatis, sed sequi sit!",
        "icon": "",
        "common": false
    },
    {
        "id": "4",
        "name": "Flore",
        "description": "Adipisci aperiam architecto autem, consectetur delectus eaque eligendi facilis fuga harum libero maiores minima nesciunt nulla quisquam repellat soluta voluptatem. At autem eum facere numquam optio perspiciatis, sed sequi sit!",
        "icon": "",
        "common": true
    },
    {
        "id": "5",
        "name": "Organisation de la lutte contre la corruption",
        "description": "Adipisci aperiam architecto autem, consectetur delectus eaque eligendi facilis fuga harum libero maiores minima nesciunt nulla quisquam repellat soluta voluptatem. At autem eum facere numquam optio perspiciatis, sed sequi sit!",
        "icon": "",
        "common": true
    },
    {
        "id": "6",
        "name": "Répression et principes",
        "description": "Adipisci aperiam architecto autem, consectetur delectus eaque eligendi facilis fuga harum libero maiores minima nesciunt nulla quisquam repellat soluta voluptatem. At autem eum facere numquam optio perspiciatis, sed sequi sit!",
        "icon": "",
        "common": false
    }
]

class Thematique extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-8 grid-margin">
                    <div className="content-wrapper">
                        <h2 className="card-title">Thématiques Fréquentes</h2>
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
                        <h2 className="card-title">Toutes les Thématiques</h2>
                        <ListThematiques/>
                    </div>
                </div>
            </div>


        )
    }


}

function ListThematiques(props) {
    const list = []
    json.forEach((t) => {
        list.push(<li>{t.name}</li>)
    })

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">List Unordered</h4>
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
                    <h4 className="card-title">{json[props.id].name}</h4>
                    <p className="card-description">
                        {json[props.id].description}
                    </p>
                </div>
            </div>
        </div>
    );

}


export default Thematique;