// MODULES
// CommonJS, every file is a module (by default)
// Modules - Encapsulates Code (only share minimum)
const http = require('http');


const server = http.createServer((req, res) => {
	//console.log(req);
	
	if (req.url === '/') {
		res.write('Welcome to our home page');
	
		res.end();
	}
	if (req.url === '/about') {
		res.write('Here is our short history');
		
		res.end();
	}
	
	res.end(`<h1>Oops</h1><p>We can't seem to find the page you are looking for</p><a href="/">back home</a>`);
	
	// res.end();
});



server.listen(5000);










