const express = require('express');
const path = require('path');



const app = express();

app.use(express.static('./public'));
app.use(express.json());


// ATENTION: see that the real home page
// is being delivered at root with the
//express.static('./public') middleware
app.get('/the-more-basic-home-page', (req, res) => {
	// Atenção: veja que tanto path.resolve()
	// quanto path.join() podem construir
	// a referência à pasta Public
	
	// res.sendFile(path.resolve(__dirname, './the-more-basic-home-page/index.html'));
	
	res.sendFile(path.join(__dirname, './the-more-basic-home-page/index.html'));
});  





app.all('*', (req, res) => {
	
	res.status(404).send('resource not found');
});


const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server is listenning on port ${port}`);
});







