const express = require('express');

const { products } = require('./data/data');



const app = express();

// REQUEST -> MIDDLEWARE -> RESPONSE
const logger = (req, res, next) => {
	const method = req.method;
	const url = req.url;
	const time = new Date().getFullYear();
	
	console.log(method, url, time);
	
	// senão for o final da response,
	// é precisso chamar o próximo -> next() 
	next();
};

// passar middleware a todas as rotas abaixo
//app.use(logger);


// inserir middleware em rota específica
app.get('/', logger, (req, res) => {
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




const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});





























