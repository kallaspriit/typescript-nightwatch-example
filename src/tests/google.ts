import {NightWatchClient} from 'nightwatch';

export default {
	'search for nightwatch finds the github repository': (client: NightWatchClient) => {
		client.page.google().navigate().enterQuery(client, 'nightwatch');

		client.assert.title('nightwatch - Google Search').assert.containsText('//*[@id="main"]', 'Nightwatch.js').end();
	},
};
