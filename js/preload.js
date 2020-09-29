if (window !== window.top) {
  return;
}
console.log("TabManager Preload example loaded.");

import("https://q31mz.csb.app/js/tab-manager.js")
  .then(async (tabManager) => {
    await tabManager.init({
      layoutId: "layout-container",
      hideTitle: false,
      leftComponents: ["channel-indicator"],
      rightComponents: ["channel-indicator"]
    });
  })
  .catch((err) => console.error("Error getting tab-manager", err));
