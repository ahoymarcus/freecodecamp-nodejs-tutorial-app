const express = require('express');
const morgan = require('morgan');

const { products } = require('./data/data');
const logger  = require('./middlewares/logger');
const jockerAPI = require('./middlewares/jockerAPI');
const authorize = require('./middlewares/authorize');



const app = express();

// REQUEST -> MIDDLEWARE -> RESPONSE
app.use(morgan('tiny'));



app.get('/', (req, res) => {
	
	res.send('Home page');
});


app.get('/about', (req, res) => {
	
	res.send('About page');
});


// Rotas API
app.get('/api/products', (req, res) => {
	console.log('Data coming from the middleware =', req.user);
	
	res.status(200).send('Products API');
});

app.get('/api/items', (req, res) => {
	console.log('Data coming from the middleware =', req.user);
	
	res.status(200).send('Items API');
});



const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});













