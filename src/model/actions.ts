import {store} from "./store";

// action types
export const INITIALIZE = 'INITIALIZE';


export class InitializeAction {
    type = INITIALIZE;

    constructor() {

    }
}
export const dispatchInitializeAction = () => {
    store.dispatch({...(new InitializeAction())});
};