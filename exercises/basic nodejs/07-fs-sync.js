// MODULES
// CommonJS, every file is a module (by default)
// Modules - Encapsulates Code (only share minimum)
const { readFileSync, writeFileSync } = require('fs');



console.log('starting.....');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);


console.log('Done with this tasks...');

writeFileSync(
	'./content/result.txt', 
	`Here is the result: ${first}, ${second}`
);


console.log('Done with this task...');


// Now, appendig...
writeFileSync(
	'./content/result.txt',
	"\nSURPRISED.....",
	{ flag: 'a'}
);


console.log('Done with this task...');


console.log('Finished.......');
















