// routes.js

var getWeather = require('./weather');

module.exports = function(app) {
	
	app.get('/weather/:lat/:lon', (req, res) => {
		getWeather(req.params).then((weather) => {
		//	console.log(weather);
			res.send(weather);
		}, (e) =>  {
			res.send(e);
		});
		
		// console.log(req.params);
	});

};
