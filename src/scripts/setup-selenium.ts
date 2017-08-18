import * as chalk from 'chalk';
import * as fs from 'fs';
import * as path from 'path';
import {ensure} from 'selenium-download';
import paths from '../paths';

const seleniumFilename = path.join(paths.bin, 'selenium.jar');

if (!fs.existsSync(seleniumFilename)) {
	console.log(`selenium not present in ${chalk.reset.bold(seleniumFilename)}`);

	// install selenium
	ensure(paths.bin, (error: Error) => {
		if (error) {
			console.error(`Installing selenium failed: ${error.message}`);

			return;
		}
	});
}
