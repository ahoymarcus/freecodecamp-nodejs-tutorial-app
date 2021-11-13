const app = require('express')();



app.get('/', (req, res) => {
	console.log('User hit the resource.....');
	res.status(200).send('Home Page');
});


app.get('/about', (req, res) => {
	
	res.status(200).send('About page');
});




// app.all() responde em nome de qq
// dos http métodos
app.all('*',  (req, res) => {
	
	res.status(404).send('<h1>resource not found</h1>');
});


const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server is listenning on port ${port}`);
});






