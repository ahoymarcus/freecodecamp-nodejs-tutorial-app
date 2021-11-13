const express = require('express');

const { products } = require('./data/data');
const logger  = require('./middlewares/logger');
const jockerAPI = require('./middlewares/jockerAPI');
const authorize = require('./middlewares/authorize');



const app = express();

// REQUEST -> MIDDLEWARE -> RESPONSE
app.use([logger]);

// inserir middleware em rota específica
app.get('/', (req, res) => {
	// const method = req.method;
	// const url = req.url;
	// const time = new Date().getFullYear();
	
	res.send('Home page');
});


app.get('/about', (req, res) => {
	// const method = req.method;
	// const url = req.url;
	// const time = new Date().getFullYear();
	
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



