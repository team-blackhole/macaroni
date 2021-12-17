import { customElement } from 'lit/decorators.js'
import { LitElement, html, css, property } from 'lit-element'

@customElement('macaroni-window')
export class Window extends LitElement {
  @property({ type: Boolean })
  title = '';

  static styles = [
    css`
      .window {
        outline: 1px solid black;
      }
    `
  ]

  protected render () {
    return html`
      <div class="window">
        <macaroni-title-bar>title</macaroni-title-bar>
        <slot></slot>
      </div>
    `
  }
}
