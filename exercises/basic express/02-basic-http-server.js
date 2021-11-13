const http = require('http');
const { readFileSync } = require('fs');



const homePage = readFileSync('./public/index.html');


const server = http.createServer((req, res) => {
	console.log('user hit the server....');
	console.log('req.url = ', req.url);
	
	if (req.url === '/') {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		// Deliver the content from the file
		res.write(homePage);
	
		res.end();
	} else if (req.url === '/about') {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write('<h1>About page</h1>');
	
		res.end();
	} else {
		res.writeHead(400, { 'Content-Type': 'text/html' });
		res.write('<h1>page not found</h1>');
	
		res.end();
	}
	
	
});

 
 



const port = process.env.PORT || 5000;

server.listen(port, () => {
console.log(`Server running at port ${port}`);
});

