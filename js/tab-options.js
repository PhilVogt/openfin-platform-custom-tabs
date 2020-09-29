import { init } from "./tab-manager.js";

(async function () {
  await init({
    layoutId: "layout-container",
    hideTitle: false,
    leftComponents: ["channel-indicator"],
    rightComponents: ["channel-indicator"]
  });
})();
