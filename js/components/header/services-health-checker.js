import { html, render } from "https://unpkg.com/lit-html@1.0.0/lit-html.js";

class ServicesHealthCheckerComponent extends HTMLElement {
	constructor() {
		super();
		this.render = this.render.bind(this);
		this.render();
	}

	async launchServiceCheckerWindow({ screenX, screenY }) {
		let height = 91;
		let width = 385;
		let defaultLeft = screenX - width;
		let defaultTop = screenY + 13;


		const winOption = {
			name: "service-checker",
			defaultWidth: width,
			defaultHeight: height,
			smallWindow: true,
			defaultTop,
			defaultLeft,
			showTaskbarIcon: false,
			saveWindowState: false,
			url: "http://localhost:5000/views/service-checker.html", // This doesnt have to be hardcoded, can be in settings somewhere E.g. "settings.serviceChecker.url",
			frame: false,
			autoShow: false,
		};

		let win = await fin.Window.create(winOption);

		let webWindow = win.getWebWindow();
		webWindow.popupCallback = async (yourDataPassedBackFromChildWindow) => {
			// Here you can react to any data passed back from the child window
			console.log(
				"Data passed back from Service Checker Popup " +
				JSON.stringify(yourDataPassedBackFromChildWindow)
			);
		};

		// Hide when user clicks away
		win.on("blurred", async () => {
			await win.removeAllListeners("blurred");
			await win.close(true);
		});

		this.render();
		await win.showAt(defaultLeft, defaultTop);
		await win.focus();
	}

	async render() {
		const serviceHealthChecker = html`
			<i
				class="fas fa-plug"
				title="View Services"
				@click=${(evt) => this.launchServiceCheckerWindow(evt).catch(console.error)}
			></i>
		`;
		return render(serviceHealthChecker, this);
	}
}

customElements.define("services-health-checker", ServicesHealthCheckerComponent);
