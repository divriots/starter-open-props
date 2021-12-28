import { LitElement, html, css } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import logo from './open-props.svg?raw';

export class OpenPropsLogo extends LitElement {
  static styles = css`
    .op-icon {
      width: 4rem;
      margin: 1rem 0;
    }
    .op-icon-p {
      stroke: rgb(66, 99, 235);
    }
    .op-icon-o {
      stroke: rgb(92, 124, 250);
    }
  `;
  render() {
    return html`${unsafeSVG(logo)}`;
  }
}

customElements.define('open-props-logo', OpenPropsLogo);
