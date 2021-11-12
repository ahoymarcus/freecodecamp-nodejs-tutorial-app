// MODULES
// CommonJS, every file is a module (by default)
// Modules - Encapsulates Code (only share minimum)
const { readFile, writeFile } = require('fs');


console.log('starting.....');

// Without providing de encoding Option
// whe receive a Buffer
readFile('./content/first.txt', 'utf8', (err, result) => {
	if (err) return console.log(err);
	
  const first = result;
	
	readFile('./content/second.txt', 'utf8', (err, result) => {
		if (err) return console.log(err);
		
		const second = result;
		
		writeFile(
			'./content/result-async.txt', 
			`Here is the result: ${first}, ${second}`,
			{ flag: 'a'}, 
			(err, result) => {
				if (err) return console.log(err);
				
				console.log('Done with this task...');
			});
			
	});
});


console.log('Finished.......');





