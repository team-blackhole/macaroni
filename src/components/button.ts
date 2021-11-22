import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('macaroni-button')
export class Button extends LitElement {
    render() {
        html`
            <button><slot></slot></button>
        `;
    }
}