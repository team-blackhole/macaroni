import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('macaroni-button')
export class Button extends LitElement {
  static styles = [
    css`
    slot {
      font-family: "Chicago", sans-serif;
    }
    button {
      all: unset;

      text-align: center;

      position: relative;
      min-width: 50px;
      padding: 0 20px;

      background-color: white;
      outline: 1px solid black;
      border-radius: 6px;

      box-shadow:
        0 0 0 3px white,
        0 0 0 6px black;
    }
    button:active {
      background-color: black;
      color: white;
    }
    `
  ]
  render() {
    return html`
            <button><slot></slot></button>
        `;
  }
}