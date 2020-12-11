export async function getChannelClient(clientName) {
	console.log("View loaded...");

	const client = await fin.InterApplicationBus.Channel.connect("header-actions_" + clientName, {
		wait: true,
	});

	return client;
}
