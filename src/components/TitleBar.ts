import { LitElement, html, css, property } from 'lit-element'
import { customElement } from 'lit/decorators.js'

@customElement('macaroni-title-bar')
export class TitleBar extends LitElement {
  @property({ type: Boolean })
  stripe = false

  @property({ type: Boolean })
  closeBox = false

  @property({ type: Boolean })
  zoomBox = false

  static styles = [
    css`
      .title-bar {
        all: unset;

        display: block;
        position: relative;

        text-align: center;

        min-width: 200px;
        height: 15px;

        outline: 1px solid black;
        overflow: hidden;
      }

      .slot-wrapper {
        display: block;
        position: relative;
        height: 100%;
        margin: 0 auto;
        font-family: "Chicago", sans-serif;
        font-size: 10px;
      }

      slot {
        display: inline-block;
        padding: 0 30px;
        height: 100%;
        background: #ffffff;
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

      .stripe1.no-stripe {
        display:none;
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

      .stripe2.no-stripe {
        display:none;
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

      .stripe3.no-stripe {
        display:none;
      }

      .close-box {
        position: absolute;
        top: 2px;
        left: 12px;
        width: 9px;
        height: 9px;
        border: 1px solid black;
        box-shadow: 3px 0 white, -3px 0 white;
        background-color: white;
      }
      
      .close-box.no-close-box {
        display: none;
      }

      .zoom-box {
        position: absolute;
        top: 2px;
        right: 12px;
        width: 9px;
        height: 9px;
        border: 1px solid black;
        box-shadow: 3px 0 white, -3px 0 white;
        background-color: white;
      }

      .zoom-box > div {
        position: absolute;
        top: -1px;
        left: -1px;
        width: 4px;
        height: 4px;
        border: 1px solid black;
        background-color: white;
      }

      .zoom-box.no-zoom-box {
        display: none;
      }
    `
  ]

  render () {
    return html`
      <div class="title-bar">
        <div class="stripe1 ${this.stripe ? '' : 'no-stripe'}"></div>
        <div class="stripe2 ${this.stripe ? '' : 'no-stripe'}"></div>
        <div class="stripe3 ${this.stripe ? '' : 'no-stripe'}"></div>
        <div class="slot-wrapper">
          <slot></slot>
        </div>
        <div class="close-box ${this.closeBox ? '' : 'no-close-box'}"></div>
        <div class="zoom-box ${this.zoomBox ? '' : 'no-zoom-box'}">
          <div></div>
        </div>
      </div>
    `
  }
}
