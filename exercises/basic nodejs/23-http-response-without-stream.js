// MODULES
// CommonJS, every file is a module (by default)
// Modules - Encapsulates Code (only share minimum)



const http = require('http');
const fs = require('fs');


// Go to Network menu at chrome and see
// that the transfer is made in its 
// entire
http.createServer((req, res) => {
	const text = fs.readFileSync('./content/big-text.txt', 'utf8');
	
	res.end(text);
}).listen(5000);







