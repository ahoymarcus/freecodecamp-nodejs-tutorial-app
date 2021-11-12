// MODULES
// CommonJS, every file is a module (by default)
// Modules - Encapsulates Code (only share minimum)



const { readFile, writeFile } = require('fs');
const util = require('util');



const readFilePromisified = util.promisify(readFile);
const writeFilePromisified = util.promisify(writeFile);


const start = async () => {
	try {
		const first = await readFilePromisified('./content/first.txt', 'utf8');
		const second = await readFilePromisified('./content/second.txt');
		
		await writeFilePromisified('./content/result-promisify.txt', `THIS IS AWESOME: ${first} :: ${second}`);
		
		console.log(first + " :: " + second);
	} catch (err) {
		console.log(err);
	}
};


start();

 











