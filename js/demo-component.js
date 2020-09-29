class ChannelIndicator extends HTMLElement {
  set viewName(value) {
    this.setAttribute("viewName", value);
  }

  get viewName() {
    return this.getAttribute("viewName");
  }

  set color(value) {
    this.style.color = value;
  }

  set margin(margins) {
    if (margins !== undefined && margins.right !== undefined) {
      this.style.marginRight = margins.right;
    }
  }

  connectedCallback() {
    this.innerHTML = "&#11044";
    this.color = "blue";
    this.margin = { right: "10px" };
  }

  disconnectedCallback() {}
}

window.customElements.define("channel-indicator", ChannelIndicator);
