//https://www.youtube.com/watch?v=Oe421EPjeBE
// 5 hr 57' 30''
// MODULES
// CommonJS, every file is a module (by default)
// Modules - Encapsulates Code (only share minimum)
const express = require('express');

const { products } = require('./data/data');



const app = express();


app.get('/', (req, res) => {
	
	res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
});


app.get('/api/products', (req, res) => {
	const allProducts = products.map((product) => {
		const { id, name, image } = product;
		
		return { id, name, image };
	});
	
	res.status(200).json(	allProducts );
});


app.get('/api/products/:productID', (req, res) => {
	console.log('req.params = ', req.params);
	const { productID } = req.params;
	
	const singleProduct = products.find(
		(product) => product.id === parseInt(productID) 
	);
	
	console.log('singleProduct = ', singleProduct);
	if (!singleProduct) {
		res.status(404).send('Product does not exists');
	}
	
	res.status(200).json( singleProduct );
});


// STUDY CASE
// REQ.PARAMS
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
	console.log('req.params = ', req.params);
	
	res.status(200).send('Hello world');
});


// STUDY CASE
// REQ.QUERY
app.get('/api/v1/query', (req, res) => {
	console.log('req.query = ', req.query);
	
	res.status(200).send('query route');
});









const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});





