//https://www.youtube.com/watch?v=Oe421EPjeBE
// 6 hr 40' 50''
// MODULES
// CommonJS, every file is a module (by default)
// Modules - Encapsulates Code (only share minimum)
const express = require('express');

const { products } = require('./data/data');
const logger  = require('./middlewares/logger');
const jockerAPI = require('./middlewares/jockerAPI');
const authorize = require('./middlewares/authorize');



const app = express();

// REQUEST -> MIDDLEWARE -> RESPONSE
app.use([logger]);


app.get('/', (req, res) => {
	
	res.send('Home page');
});


app.get('/about', (req, res) => {
	
	res.send('About page');
});
 

// Rotas API
app.get('/api/products', [jockerAPI, authorize], (req, res) => {
	console.log('Data coming from the middleware =', req.user);
	
	res.status(200).send('Products API');
});

app.get('/api/items', [jockerAPI, authorize], (req, res) => {
	console.log('Data coming from the middleware =', req.user);
	
	res.status(200).send('Items API');
});



const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});





