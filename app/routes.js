// routes.js


module.exports = function(app) {
	
	app.get('/weather/:lat/:long', (req, res) => {
		var weather = { temp: 25};
		console.log(req.params);
		res.send(weather);		
	});

};
