import {NightWatchClient} from 'nightwatch';

export default {
	'search for nightwatch finds the github repository': (client: NightWatchClient) => {
		// navigate to google page and enter search query
		client.page.google().navigate().enterQuery(client, 'nightwatch');

		// execute the example sleep command defined in src/commands/sleep.ts
		client.sleep(10000);

		// verify page title and contents
		client.assert.title('nightwatch - Google Search').assert.containsText('//*[@id="main"]', 'Nightwatch.js').end();
	},
};
