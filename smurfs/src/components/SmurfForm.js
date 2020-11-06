import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postSmurf } from '../actions/smurfActions';

import './App';

const initialFormValues = {
    name: '',
    age: '',
    height: '',
    id: Date.now()
}

const SmurfForm = (props) => {
    const [newSmurf, setNewSmurf] = useState(initialFormValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        // props.postSmurf(newSmurf);
    }

    const handleChangle = (e) => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
    }

    const handleAdd = () => {
        props.postSmurf(newSmurf);
    }

    return (
        <div>
            <h3>Grow your smurf village!</h3>
            <form className="smurf-form" onSubmit={handleSubmit}>
            <input className = "input"
            name = 'name'
            placeholder = 'Smurf Name'
            type = 'text'
            onChange={handleChangle}
            />
            <input className = "input"
            name = 'age'
            placeholder = 'Age'
            type = 'text'
            onChange={handleChangle}
            />
            <input className = "input"
            name = 'height'
            placeholder ='Height'
            type = 'text'
            onChange={handleChangle}
            />
        </form>
        <button onClick={handleAdd}>Add Smurf</button>
        </div>
    );
};

export default connect(null, {postSmurf})(SmurfForm);