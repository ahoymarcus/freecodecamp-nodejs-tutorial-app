const express = require('express');

let { people } = require('./data/data');



const app = express();

// static assets
app.use(express.static('./methods-public'));

// parse form data
app.use(express.urlencoded({ extended: false }));



app.post('/login', (req, res) => {
	console.log('req.body = ', req.body);
	
	const data = req.body.name;
	console.log(data);
	
	if (data) {
		return res.status(200).json({ 
			status: 'success',
			msg: `Hello, ${data}`
		});
	}
	
	// Unauthorized
	res.status(401).json({ 
		status: 'fail',
		msg: 'Please, send the credentials'
	});
});


app.get('/api/people', (req, res) => {
		
	res.status(200).json({ 
		success: true,
		data: people
	});
});







const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});


























