import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions/smurfActions';

import SmurfCard from './SmurfCard';

const Smurfs = (props) => {

    useEffect(() => {
        props.fetchSmurfs();
    }, [])

    return (
        <div>
            {props.isLoading ? <p>Loading smurfs ...</p> : null}
            {props.error ? <p style={{ color: "red " }}>{props.error}</p> : null}
            <div>
                {props.smurfData.map((smurf) => (
                    <SmurfCard smurfData={smurf}/>
                ))}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        smurfData: state.smurfData,
        error: state.error
    };
};

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);