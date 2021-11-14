//https://www.youtube.com/watch?v=Oe421EPjeBE
// 7 hr 38' 30''
// MODULES
// CommonJS, every file is a module (by default)
// Modules - Encapsulates Code (only share minimum)
const express = require('express');

let { people } = require('./data/data');



const app = express();

// static assets
app.use(express.static('./methods-public'));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());



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


app.get('/api/postman/people', (req, res) => {
		
	res.status(200).json({ 
		success: true,
		data: people
	});
});


app.post('/api/postman/people', (req, res) => {
	const { name } = req.body;
	console.log(name);
	
	if (!name) {
		return res.status(400).json({ success: false, msg: 'Please, provide a name value' });
	}
	
	res.status(200).json({ 
		success: true,
		data: [
			name,
			...people
		]
	});
});


app.get('/api/postman/people/:id', (req, res) => {
	const { id } = req.params;
	
	const person = people.find((person) => person.id === parseInt(id));
	
	console.log(person);
	
	if (!person) { // Not found
		return res.status(404).json({ success: true, msg: `No person with the id ${id}` });
	}
	
	res.status(200).json({
		success: true,
		person: person
	});
});


app.put('/api/postman/people/:id', (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	
	const person = people.find((person) => person.id === parseInt(id));
	
	if (!person) { // Not found
		return res.status(404).json({ success: true, msg: `No person with the id ${id}` });
	}
	
	const newPeople = people.map((person) => {
		if (person.id === parseInt(id)) {
			person.name = name;
		}
		
		return person;
	});
	
	res.status(200).json({
		success: true,
		data: [
			id,
			name,
			...newPeople
		]
	});
});


app.delete('/api/postman/people/:id', (req, res) => {
	const { id } = req.params;
	
	const person = people.find((person) => person.id === parseInt(id));
	
	if (!person) { // Not found
		return res.status(404).json({ success: true, msg: `No person with the id ${id}` });
	}
	
	let excluded;
	const newPeople = people.filter((person) => person.id !== parseInt(id));
		
	res.status(200).json({
		success: true,
		excluded: { id },
		data: [
			...newPeople
		]
	});
});





const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});







