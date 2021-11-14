const express = require('express');

let { people } = require('./data/data');



const app = express();

// static assets
app.use(express.static('./methods-public'));

// parse json
app.use(express.json());



app.get('/api/people', (req, res) => {
		
	res.status(200).json({ 
		success: true,
		data: people
	});
});


app.post('/api/people', (req, res) => {
	console.log('req.body = ', req.body);
	
	const { name } = req.body;
	
	if (!name) {
		return res.status(400).json({ success: false, msg: 'please provide a name value' });
	}
	
	
	res.status(201).json({ success: true, person: name });
});






const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});








