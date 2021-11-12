// MODULES
// CommonJS, every file is a module (by default)
// Modules - Encapsulates Code (only share minimum)
const { john, peter } = require('./data/names');
const { sayHi } = require('./data/utils');
const data = require('./data/data-exporting-in-alternative-flavor');




sayHi('Susan');
sayHi(john);
sayHi(peter);


console.log('\ndata = ', data);






