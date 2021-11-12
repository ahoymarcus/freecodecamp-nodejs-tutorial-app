// MODULES
// CommonJS, every file is a module (by default)
// Modules - Encapsulates Code (only share minimum)



const EventEmitter = require('events');



const customEmitter = new EventEmitter();


customEmitter.on('response', () => {
	console.log(`\ndata received `);
});


customEmitter.emit('response');


 
 










