// ROUTES
const express = require('express');

const {
	getPeople,
	createPerson,
	getPerson,
	updatePerson,
	deletePerson
} = require('../controllers/people');



const router = express.Router();


router.route('/').get(getPeople).post(createPerson);
router.route('/:id').get(getPerson).put(updatePerson).delete(deletePerson);




module.exports = router




