import { html, render } from 'https://unpkg.com/lit-html@1.0.0/lit-html.js';

class WindowMinimizeComponent extends HTMLElement {

    constructor() {
        super();
        this.render = this.render.bind(this);
        this.render();
    }

    async render() {
        const minimize = html`
        <i class="fas fa-window-minimize" title='Minimise Window' @click=${() => this.minimize().catch(console.error)}></i>
        `;
        return render(minimize, this);
    }

    async minimize() {
        fin.me.minimize().catch(console.error);
    }
}

customElements.define('window-minimize', WindowMinimizeComponent);
