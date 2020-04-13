import { store } from "./store";
// action types
export const INITIALIZE = 'INITIALIZE';
export class InitializeAction {
    constructor() {
        this.type = INITIALIZE;
    }
}
export const dispatchInitializeAction = () => {
    store.dispatch({ ...(new InitializeAction()) });
};
//# sourceMappingURL=actions.js.map