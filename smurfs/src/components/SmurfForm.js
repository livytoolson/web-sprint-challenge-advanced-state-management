import React, { useState } from 'react';
import { connect } from 'react-redux';

const initialFormValues = {
    name: '',
    age: '',
    height: '',
    id: Date.now()
}

const SmurfForm = (props, initialFormValues) => {
    const [newSmurf, setNewSmurf] = useState(initialFormValues);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChangle = () => {
        setNewSmurf(...newSmurf, )
    }

    return (
        <div>
            <h3>Make a Smurf!</h3>
            <form onSubmit={handleSubmit}>
            <input
            name = 'name'
            placeholder = 'Smurf Name'
            type = 'text'
            onChange={handleChangle}
            />
            <input 
            name = 'age'
            placeholder = 'Age'
            type = 'number'
            onChange={handleChangle}
            />
            <input 
            name = 'height'
            placeholder ='Height'
            type = 'text'
            onChange={handleChangle}
            />
        </form>
        <button>Add Smurf</button>
        </div>
    );
};

export default connect(null, {})(SmurfForm);