class EditHeaderComponent extends HTMLElement {
	constructor() {
		super();
	}

	set viewName(value) {
		this.setAttribute("viewName", value);
	}

	get viewName() {
		return this.getAttribute("viewName");
	}

	set margin(margins) {
		if (margins !== undefined && margins.right !== undefined) {
			this.style.marginRight = margins.right;
			this.style.transform = "rotate(20deg)";
		}
	}

	connectedCallback() {
		this.innerHTML = "&#x270f";
		this.color = "orange";
		this.margin = { right: "20px" };

		this.onclick = (ev) => {
			console.log(`edit header clicked`);
		};
	}

	disconnectedCallback() {}
}

window.customElements.define("edit-header-component", EditHeaderComponent);
