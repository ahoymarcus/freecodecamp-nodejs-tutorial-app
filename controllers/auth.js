

const auth = (req, res) => {
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
};



module.exports = auth



