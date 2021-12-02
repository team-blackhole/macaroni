import { LitElement, html, css, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import titlebarBackground from '../../image/titlebar_background.svg'

@customElement('macaroni-titlebar')
export class Titlebar extends LitElement {
  static styles = [
    css`
      slot {
        font-family: "Chicago", sans-serif;
      }

      div {
        all: unset;

        text-align: center;

        position: relative;
        min-width: 200px;
        padding: 0 20px;

        outline: 1px solid black;
        border-radius: 6px;

        background: white url(${unsafeCSS(titlebarBackground)} repeat-x;

        box-shadow: 0 0 0 3px white,
        0 0 0 6px black;
      }

      button:active {
        background-color: black;
        color: white;
      }
    `
  ]

  render () {
    return html`
            <div><slot></slot></div>
        `
  }
}
