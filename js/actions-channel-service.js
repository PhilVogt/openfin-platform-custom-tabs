export async function init() {
	// entity creates a channel and becomes the channelProvider
	const headerActionsProviderBus = await fin.InterApplicationBus.Channel.create(
		"header-actions_" + fin.me.identity.name
	);

	headerActionsProviderBus.onConnection((identity, payload) => {
		// can reject a connection here by throwing an error
		console.log("Actions Channel: Client connection request identity: ", JSON.stringify(identity));
		console.log("Actions Channel: Client connection request payload: ", JSON.stringify(payload));
		if (identity.uuid !== fin.me.identity.uuid) {
			throw new Error(
				"Connections are only allowed for this this application and no external applications have permission to connect."
			);
		}
	});

	headerActionsProviderBus.register("UpdateTitleAction", async (payload, identity) => {
		console.log(
			"Actions Channel: Execute Action: Requested by client: " + JSON.stringify(identity)
		);
		console.log(
			"Actions Channel: Execute Action: Payload sent in request: " + JSON.stringify(payload)
		);

		document.title = "Something new";

		return true;
	});
}

window.addEventListener("DOMContentLoaded", async () => {
	console.log("Initialising channel.");
	await init();
});
