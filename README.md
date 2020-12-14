# Tab Header and Non-clipping window example

## Things of note;

- This is a demo and not production code. It is to give you an idea on how to achieve some customisation of the OpenFin Platform API tabs.

- The tab-manager file exports an init function which you can use to configure the controls you wish to load into the tab (left or right side), whether or not you wish to show the title (if you hide it then I suggest one of the custom controls shows a title of some sort) and what the id of the div the Platform API is binding to (when you specify a custom template then you need to provide the id of the div which the platform api should bind to -> js/layout-container-binding.js)

- The tab manager file tries to take into account initial loads from snapshots as well as tab drags and presets (grid, row etc) being applied.

- You pass the tab manager init function an array of strings (for left or right components) which represent the names of webcomponents you have defined (this would be loaded into the page through the template or preload scripts).

- Something to note is that the tab is destroyed and recreated when you move it around so your webcomponents should take that into account.

- Here's an example of the tab-manager loading a "channel-indicator" and an "edit-header-component". The channel-indicator doesnt do anythng special, but could be used in a color coded fashion if you wanted to show some kind of status. The edit-header-component is the component which is responsible for trying to send "UpdateTitleAction" requests to the child view (see below).

```javascript
import { init } from "./tab-manager.js";

// start of your function or wrap it in (async function () {
await init({
	layoutId: "layout-container",
	hideTitle: false,
	leftComponents: ["channel-indicator"],
	rightComponents: ["edit-header-component"],
});
// end of your function or execute the wrapper: })();
```

- The "actions-channel-client.js" and the "actions-channel-client.js" files show the basic channel communication that allows the view to react to button presses comming from the edit-header-component. Currently the child view registers the "UpdateTitleAction" and when called, it simply changes the title of the document (which is what drives the tab string.)

```javascript
document.title = "Something new";
```

## To get this demo working

1. run `npm install` in the root directory.
2. Then run `npm start`
3. All going well, you should be able to launch a browser here -> http://localhost:5000.
4. The 2 hyper links show the way that this code can be injected/run, either via a pre-load script, or via a "custom page" (we called ours "window-template.html").
