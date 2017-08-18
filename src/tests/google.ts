import {NightWatchClient} from 'nightwatch';

export default {
	'search for nightwatch finds the github repository': (client: NightWatchClient) => {
		// navigate to google page and enter search query
		client.page.google().navigate().enterQuery(client, 'nightwatch');

		// execute the example custom sleep command defined in src/commands/sleep.ts
		client.sleep(1000);

		// execute the example custom assertion defined in src/assertions/matches.ts
		client.assert.matches(
			'//*[@id="rhs_block"]/div[1]/div[1]/div/div[1]/div[2]/div[1]/div/div[2]/div/div/div[2]/div[1]/span',
			/night watch/i,
		);

		// verify page title and contents
		client.assert.title('nightwatch - Google Search').assert.containsText('//*[@id="main"]', 'Nightwatch.js').end();
	},
};
