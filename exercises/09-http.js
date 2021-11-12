// MODULES
// CommonJS, every file is a module (by default)
// Modules - Encapsulates Code (only share minimum)
const http = require('http');


const server = http.createServer((req, res) => {
	//console.log(req);
	
	
	//   if (req.url === '/') {
  //     res.end('Welcome to our home page')
  //   }
  //   if (req.url === '/about') {
  //     res.end('Here is our short history')
  //   }
  //   res.end(`
  //   <h1>Oops!</h1>
  // <p>We can't seem to find the page you are looking for</p>
  // <a href="/">back home</a>
  //   `)
  // ###################################
  // ###################################
  //
  //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
  // SWITCH TO IF, ELSE IF, ELSE (BELOW)
  // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
	if (req.url === '/') {
		res.write('Welcome to our home page');
	
		res.end();
	} else if (req.url === '/about') {
		res.write('Here is our short history');
		
		res.end();
	} else {
		res.end(`<h1>Oops</h1><p>We can't seem to find the page you are looking for</p><a href="/">back home</a>`);
	}
});



server.listen(5000);










