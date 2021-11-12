// MODULES
// CommonJS, every file is a module (by default)
// Modules - Encapsulates Code (only share minimum)


const EventEmitter = require('events');



const customEmitter = new EventEmitter();


customEmitter.on('response', (name, id) => {
	console.log(`\ndata received: user ${name} with id: ${id}`);
});
customEmitter.on('response', () => {
	console.log(`\nsome other logic logic here`);
});



customEmitter.emit('response', 'john', 34);


 
 










