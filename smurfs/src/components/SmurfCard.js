import React from 'react';
import { connect } from 'react-redux';

import './App.css';

const SmurfCard = (props) => {
    return (
        <div className="smurf-card">
            <h4>{props.smurfData.name}</h4>
            <p>Age: {props.smurfData.age}</p>
            <p>Height: {props.smurfData.height}</p>
        </div>
    )
}

export default connect(null, {})(SmurfCard);