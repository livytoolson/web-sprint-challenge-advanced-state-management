import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions/smurfActions';

const Smurfs = (props) => {

    useEffect(() => {
        props.fetchSmurfs();
    }, [])

    return (
        <div>Smurfs Component</div>
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