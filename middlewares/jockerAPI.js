

const jockerAPI = (req, res, next) => {
	console.log('Middleware atuando em rotas bases especificadas......');
	
	next();
};



module.exports = jockerAPI

