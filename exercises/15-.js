// MODULES
// CommonJS, every file is a module (by default)
// Modules - Encapsulates Code (only share minimum)


const { readFile } = require('fs');



// readFile('./content/first.txt', 'utf8', (err, data) => {
	// if (err) return console.log(err);
	
	// console.log(data);
	//// ####Avoiding Callback Hell####
	//// Other tasks would be nested from here!!!
// });


// Going for Promises
const getText = (path) => {
	return new Promise((resolve, reject) => {
		readFile(path, 'utf8', (err, data) => {
			if (err) reject(err);
			
			resolve(data);
		});
	});
}


getText('./content/first.txt')
	.then((result) => console.log(result))
	.catch((err) => console.log(err));
	

getText('../content/first.txt')
	.then((result) => console.log(result))
	.catch((err) => console.log(err));



getText('./content/first.txt')
	.then((result) => {
		const data1 = result;
		
		getText('./content/second.txt')
			.then((result) => {
				const data2 = result;
				
				console.log(data1 + ' :: ' + data2);
			})
			.catch((err) => console.log(err));
		
	})
	.catch((err) => console.log(err));
















