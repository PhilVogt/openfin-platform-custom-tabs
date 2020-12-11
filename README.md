# Tab Manager Basic Example

This is a basic template that can be used in codesandbox.

Some things you will need to update:

In config/app.platform.fin.json, config/preload.platform.fin.json update:

- uuid : make the uuid unique
- visit https://www.openfin.co and request a trial/developer license
- update the url field to reflect your codesandbox url / local webserver and update it everywhere you see the old server address
- update the application icon to reflect your own icon
- update the name and description to reflect your application
- take the new server url and update the server address in js/preload.js

Things to note:

- This is a demo and not production code. It is to give you an idea on how to achieve some customisation of the OpenFin Platform API tabs. The id and events may change in the future so please take that into account.
- The custom window-template option (where you do not use a preload script) does not have any controls in the header. The goal was to show a really simple example of what is needed for a custom template. For a richer example of window customisation please look at the OpenFin seed project: https://github.com/openfin/platform-api-project-seed
- The tab-manager file exports an init function which you can use to configure the controls you wish to load into the tab (left or right side), whether or not you wish to show the title (if you hide it then I suggest one of the custom controls shows a title of some sort) and what the id of the div the Platform API is binding to (when you specify a custom template then you need to provide the id of the div which the platform api should bind to -> js/layout-container-binding.js)
- The tab manager file tries to take into account initial loads from snapshots as well as tab drags and presets (grid, row etc) being applied.
- You pass the tab manager init function an array of strings (for left or right components) which represent the names of webcomponents you have defined (this would be loaded into the page through the template or preload scripts).
- Something to note is that the tab is destroyed and recreated when you move it around so your webcomponents should take that into account.
- both the preload script and the custom window template end up doing something like:

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

More information about OpenFin:

- https://openfin.co/ -> main site
- https://developers.openfin.co/docs/getting-started => getting started guide
- https://github.com/openfin -> OpenFin Github repo

CodeSandbox Example can be found here: https://codesandbox.io/s/openfin-platform-custom-tabs-q31mz?file=/README.md

You will need the OpenFin installed for the fins links (on the codesandbox page or directly https://q31mz.csb.app/ ) to work.
