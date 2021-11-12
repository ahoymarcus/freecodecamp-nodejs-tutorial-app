// MODULES
// CommonJS, every file is a module (by default)
// Modules - Encapsulates Code (only share minimum)



http.createServer((req, res) => {
	// const text = fs.readFileSync('./content/big-text.txt', 'utf8');
	const fileStream = fs.createReadStream('./content/big-text.txt', 'utf8');
	
	fileStream.on('open', () => {
		fileStream.pipe(res);
	});
	
	fileStream.on('error', (err) => {
		res.end(err);
	});
	
}).listen(5000);








