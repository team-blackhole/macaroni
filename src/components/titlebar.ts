import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('macaroni-titlebar')
export class Titlebar extends LitElement {
  static styles = [
    css`
      .titlebar {
        all: unset;

        display: block;
        position: relative;

        text-align: center;

        min-width: 200px;
        height: 15px;

        outline: 1px solid black;
        overflow: hidden;
      }

      slot {
        display: block;
        position: relative;
        height: 100%;
        padding: 0 30px;
        margin: 0 auto;
        font-family: "Chicago", sans-serif;
        font-size: 10px;
        //background: #ffffff;
      }

      .stripe1 {
        display: block;
        position: absolute;
        top: 2px;
        left: 2px;
        width: calc(100% - 4px);
        height: calc(100% - 6px);
        border-top: 1px solid black;
        border-bottom: 1px solid black;
      }

      .stripe2 {
        display: block;
        position: absolute;
        top: 4px;
        left: 2px;
        width: calc(100% - 4px);
        height: 5px;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
      }

      .stripe3 {
        display: block;
        position: absolute;
        top: 6px;
        left: 2px;
        width: calc(100% - 4px);
        height: 1px;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
      }
    `
  ];

  render () {
    return html`
      <div class="titlebar">
        <div class="stripe1"></div>
        <div class="stripe2"></div>
        <div class="stripe3"></div>
        <slot></slot>
      </div>
    `
  }
}
