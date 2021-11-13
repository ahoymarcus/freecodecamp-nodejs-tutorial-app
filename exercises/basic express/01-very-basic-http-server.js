const http = require('http');



const server = http.createServer((req, res) => {
	console.log('user hit the server....');
	console.log('req.url = ', req.url);
	
	// See how mime-types influence how the
	// browser responds
	// res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write('<h1>home page</h1>');
	
	res.end();
});

 
 
 
 
 
 