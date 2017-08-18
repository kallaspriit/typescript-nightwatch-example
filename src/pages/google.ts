import {NightWatchClient, PageObject} from 'nightwatch';

const page: PageObject = {
	url: 'https://www.google.com',

	commands: [
		{
			enterQuery: (client: NightWatchClient, query: string) => {
				return client
					.waitForElementVisible('//input[@name="q"]', 5000)
					.setValue('//input[@name="q"]', [query, client.Keys.ENTER])
					.waitForElementVisible('//*[@id="res"]', 5000);
			},
		},
	],

	elements: {
		queryInput: {
			locateStrategy: 'xpath',
			selector: '//input[@name="q"]',
		},
		searchButton: {
			locateStrategy: 'xpath',
			selector: '//input[@name="btnK"]',
		},
	},
};

export = page;
