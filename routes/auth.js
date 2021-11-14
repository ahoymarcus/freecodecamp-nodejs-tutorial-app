const express = require('express');

const auth = require('../controllers/auth');



const router = express.Router();



router.route('/').post(auth);



module.exports = router



