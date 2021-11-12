// MODULES
// CommonJS, every file is a module (by default)
// Modules - Encapsulates Code (only share minimum)


const { writeFileSync } = require('fs');


// ATTENTION: see that data being transfered
// in this fashing drains cache memory!!!
for (let i=0; i < 10000; i++) {
	writeFileSync(
		'./content/big-text.txt', 
		`hello world ${i}\n`,
		{ flag: 'a' }
	);
}



 
 










