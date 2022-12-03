import React, { Component } from "react";

function Buzz(props) {

    let lois = [];

    props.buzz.lois.forEach(loi => {
        lois.push(<li>{loi.name}</li>)
    });

    return (
        <div>
            <h2>Buzz</h2>
            <div>
                <h3>{props.buzz.title}</h3>
                <p>{props.buzz.content}</p>
                <div>
                    <ul>
                        {lois}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Buzz;