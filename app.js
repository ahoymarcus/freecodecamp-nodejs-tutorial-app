//https://www.youtube.com/watch?v=Oe421EPjeBE
// 7 hr 38' 30''
// MODULES
// CommonJS, every file is a module (by default)
// Modules - Encapsulates Code (only share minimum)
const express = require('express');

const auth = require('./routes/auth');
const peopleRoute = require('./routes/people');



const app = express();

// static assets
app.use(express.static('./methods-public'));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());



app.use('/api/postman/login', auth);
app.use('/api/postman/people', peopleRoute);





const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});





