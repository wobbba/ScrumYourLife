import {customElement, LitElement} from "lit-element";
import {dispatchInitializeAction} from "../model/actions";

@customElement('scl-bundle')
export class ScrumYourLife extends LitElement {


    constructor() {
        super();

        dispatchInitializeAction();
    }

    // is called by LitElement on property changes
    render() {

    }
}