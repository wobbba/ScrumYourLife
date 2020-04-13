import {INITIALIZE, InitializeAction} from "./actions";

export interface reduxState {
    scores: number[]
}

const INITIAL_STATE: reduxState = {
    scores: []
};

export const reducer = (state: reduxState = {...INITIAL_STATE}, action) => {

    let newState: reduxState = {...state};

    switch(action.type) {
        case INITIALIZE:
            action = action as InitializeAction;
            // first try to load from IndexedDB. If that fails, create fresh state.
            newState = {...INITIAL_STATE};


            return newState;
        default:
            return state;
    }
};