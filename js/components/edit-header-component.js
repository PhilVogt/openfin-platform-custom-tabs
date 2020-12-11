import { getChannelClient } from "../actions-channel-client.js";

class EditHeaderComponent extends HTMLElement {
	constructor() {
		super();
		this.dispatchEditAction = this.dispatchEditAction.bind(this);
		this.subscribeToChildClient = this.subscribeToChildClient.bind(this);
	}

	set viewName(value) {
		this.setAttribute("viewName", value);
	}

	get viewName() {
		return this.getAttribute("viewName");
	}

	dispatchEditAction(event) {
		this.channelClient.dispatch("UpdateTitleAction");
	}

	subscribeToChildClient() {
		console.log("Attempting to subscribe to child client with name " + this.viewName);
		getChannelClient(this.viewName)
			.then((client) => {
				this.channelClient = client;
			})
			.catch((e) => console.log(e));
	}

	connectedCallback() {
		this.subscribeToChildClient();
		this.innerHTML = "<div class='services-overview'>&#x270f</div>";
		this.onclick = this.dispatchEditAction;
	}

	disconnectedCallback() {}
}

window.customElements.define("edit-header-component", EditHeaderComponent);
