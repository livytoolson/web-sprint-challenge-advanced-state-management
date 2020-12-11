import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    POST_SMURFS_START,
    POST_SMURFS_SUCCESS,
    POST_SMURFS_FAILURE
} from '../actions/smurfActions';

const initialState = {
    isLoading: false,
    smurfData: [],
    error: ""
};

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading: true,
                error: ""
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfData: action.payload
            };
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case POST_SMURFS_START:
            return {
                ...state,
                isLoading: true,
            }
        case POST_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfData: action.payload,
                error: ''
            }
        case POST_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    };
};