import { html, render } from 'https://unpkg.com/lit-html@1.0.0/lit-html.js';

class WindowCloseComponent extends HTMLElement {

    constructor() {
        super();
        this.render = this.render.bind(this);
        this.render();
    }

    async render() {
        const close = html`
        <i class="far fa-window-close" title='Close Window' @click=${() => this.close().catch(console.error)}></i>
        `;
        return render(close, this);
    }

    async close() {
        fin.me.close().catch(console.error);
    }
}

customElements.define('window-close', WindowCloseComponent);
