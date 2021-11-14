// controllers
const { people } = require('../data/data');



const getPeople = (req, res) => {
	
	res.status(200).json({ 
		success: true,
		data: people
	});
};


const createPerson = (req, res) => {
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
};


const getPerson = (req, res) => {
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
};


const updatePerson = (req, res) => {
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
};


const deletePerson = (req, res) => {
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
};




module.exports = {
	getPeople,
	createPerson,
	getPerson,
	updatePerson,
	deletePerson
}






