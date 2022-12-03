import React, { Component } from "react";

function Buzz(props) {

    let lois = [];

    props.buzz.lois.forEach(loi => {
        lois.push(<p><button className='btn btn-primary'>{loi.name}</button></p>)
    });

    return (
        <div>
            <div>
                <h1>{props.buzz.title}</h1>
                <h3>{props.buzz.content}</h3>
                <div>
                    <br/><br/>
                    <h2 className="card-title">Lois en rapport: </h2>
                    {/*<ul>*/}
                        {lois}
                    {/*</ul>*/}
                </div>
            </div>
        </div>
    )
};

export default Buzz;