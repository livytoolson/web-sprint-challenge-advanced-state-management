import React from 'react';
import { connect } from 'react-redux';

const SmurfCard = (props) => {
    return (
        <div>
            <h4>{props.smurfData.name}</h4>
            <p>Age: {props.smurfData.age}</p>
            <p>Height: {props.smurfData.height}</p>
        </div>
    )
}

export default connect(null, {})(SmurfCard);