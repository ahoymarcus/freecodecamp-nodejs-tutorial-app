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
	
	const { search, limit } = req.query;
	let resultProducts = [...products];
	
	if (search) {	
		resultProducts = resultProducts.filter((product) => {
			return product.name.startsWith(search);
		});
	} 
	
	if (limit) {
		resultProducts = resultProducts.slice(0, parseInt(limit));
	} 
	
	if (resultProducts.length < 1) {
		// Modo 1: funciona, mas o servidor lança erro
		// res.status(200).send('No products match your query!');
		
		// Modo 2
		return res.status(200).json({ success: true, data: [] });
	}
		
	res.status(200).json( resultProducts );
});







const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});





