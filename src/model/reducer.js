import { INITIALIZE } from "./actions";
const INITIAL_STATE = {
    scores: []
};
export const reducer = (state = { ...INITIAL_STATE }, action) => {
    let newState = { ...state };
    switch (action.type) {
        case INITIALIZE:
            action = action;
            // first try to load from IndexedDB. If that fails, create fresh state.
            newState = { ...INITIAL_STATE };
            return newState;
        default:
            return state;
    }
};
//# sourceMappingURL=reducer.js.map