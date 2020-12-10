import { html, render } from "https://unpkg.com/lit-html@1.0.0/lit-html.js";
import "./components/header/services-health-checker.js";
import "./components/header/window-minimize-component.js";
import "./components/header/window-close-component.js";

class TitleBarMain extends HTMLElement {
	constructor() {
		super();
		this.render = this.render.bind(this);
		this.render();
		this.init();
	}

	checkForLastView() {
		// could use the ability to return the views for a window but we want the tab element as we are adding/removing a class
		if (window.document.querySelectorAll(".tab-button").length === 1) {
			window.document.querySelector(".tab-button").classList.add("last-tab-button");
		} else {
			let markedTab = window.document.querySelector(".last-tab-button");
			if (markedTab !== undefined && markedTab !== null) {
				markedTab.classList.remove("last-tab-button");
			}
		}
	}

	async init() {
		const finWindow = await fin.Window.getCurrent();

		finWindow.on("view-attached", this.checkForLastView);

		finWindow.on("view-detached", this.checkForLastView);

		await finWindow.setAsForeground();
	}

	async closePlatform() {
		const platform = await fin.Platform.getCurrent();
		platform.quit();
	}

	async render() {
		const titleBar = html` <div id="title-bar">
			<div class="title-bar-draggable">
				<div id="title"></div>
			</div>
			<div id="buttons-wrapper">
				<services-health-checker></services-health-checker>
				<window-minimize></window-minimize>
				<window-close></window-close>
			</div>
		</div>`;
		return render(titleBar, this);
	}
}

customElements.define("title-bar-main", TitleBarMain);
