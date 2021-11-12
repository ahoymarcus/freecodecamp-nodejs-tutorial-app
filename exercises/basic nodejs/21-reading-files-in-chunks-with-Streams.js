// MODULES
// CommonJS, every file is a module (by default)
// Modules - Encapsulates Code (only share minimum)

const { createReadStream } = require('fs');


const stream = createReadStream('./content/big-text.txt');



// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })


stream.on('data', (result) => {
	// SEE: that we are reading the arq
	// in chunks (the number of chunks depends
	// on the size of arq and stream config)
	console.log(result);
});














