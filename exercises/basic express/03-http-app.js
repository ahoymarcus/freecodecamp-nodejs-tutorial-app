const http = require('http');
const { readFileSync } = require('fs');



const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
	console.log('user hit the server....');
	console.log('req.url = ', req.url);
	
	if (req.url === '/') {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(homePage);
	
		res.end();
	} else if (req.url === '/about') {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(homeStyles);
	
		res.end();
	} else if (req.url === '/styles.css') {
		res.writeHead(200, { 'Content-Type': 'text/css' });
		res.write(homeStyles);
		
		res.end();
	} else if (req.url === '/logo.svg') {
		res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
		res.write(homeImage);
		
		res.end();
	} else if (req.url === '/browser-app.js') {
		res.writeHead(200, { 'Content-Type': 'text/javascript' });
		res.write(homeLogic);
		
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



