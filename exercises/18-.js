// MODULES
// CommonJS, every file is a module (by default)
// Modules - Encapsulates Code (only share minimum)


const { readFile, writeFile } = require('fs').promises;
const util = require('util');

 

// const readFilePromisified = util.promisify(readFile);
// const writeFilePromisified = util.promisify(writeFile);


const start = async (msg) => {
	try {
		const first = await readFile('./content/first.txt', 'utf8');
		const second = await readFile('./content/second.txt');
		
		await writeFile(	
			'./content/result-promisify.txt', 
			`${msg}: ${first} :: ${second}`,
			{ flag: 'a'}
			);
		
		console.log(first + " :: " + second);
	} catch (err) {
		console.log(err);
	}
};


start('THE NEWEST AWESOME');

 














