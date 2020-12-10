if (window !== window.top) {
	return;
}
console.log("TabManager Preload example loaded.");

import("http://localhost:5000/js/tab-manager.js")
	.then(async (tabManager) => {
		console.log("Loading local Preload.js File!!");
		await tabManager.init({
			layoutId: "layout-container",
			hideTitle: false,
			leftComponents: ["channel-indicator"],
			rightComponents: ["edit-header-component"],
		});
	})
	.catch((err) => console.error("Error getting tab-manager", err));
