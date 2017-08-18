import {NightWatchClient} from 'nightwatch';

export default {
	'search for Night Watch finds the github repository': (client: NightWatchClient) => {
		// navigate to google page and enter search query
		client.page.google().navigate().enterQuery(client, 'Night Watch');

		// execute the example custom sleep command defined in src/commands/sleep.ts
		client.sleep(100);

		// execute the example custom assertion defined in src/assertions/matches.ts
		client.assert.matches('//*[@id="main"]', /night watch/i);

		// verify page contents
		client.assert.containsText('//*[@id="main"]', 'Timur Bekmambetov').end();
	},
};
