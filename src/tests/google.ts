import {NightWatchClient} from 'nightwatch';

export default {
	'search for Night Watch finds the github repository': (client: NightWatchClient) => {
		// use the google page
		const google = client.page.google();

		// navigate to google page and enter search query
		google.navigate().enterQuery(client, 'Night Watch');

		// execute the example custom sleep command defined in src/commands/sleep.ts
		client.sleep(100);

		// execute the example custom assertion defined in src/assertions/matches.ts
		client.assert.matches('//*[@id="main"]', /night watch/i);

		// verify page contents using an assert
		client.assert.containsText('//*[@id="main"]', 'Timur Bekmambetov');

		// perform the same verification using expect (prefer this more powerful method)
		client.expect.element('//*[@id="main"]').text.to.contain('Timur Bekmambetov');

		// end the test
		client.end();
	},
};
