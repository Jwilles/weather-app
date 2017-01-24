var argv = require('yargs')
	.option('getLocation', {
		demand: false,
		alias: 'l', 
		description: 'Location goes here',
		type: 'string'	
	})				
	.help('help')
	.argv;

var weather = require('./weather');
var location = require('./location');


if (typeof argv.l === 'string' && argv.l.length > 0) {
	
	console.log('Location was provided.');
	weather(argv.l).then(function (currentWeather) {
		console.log(currentWeather);
	}, function (error) {
		console.log(error);
	});

} else {
	console.log('Location was not provided');
	location().then(function (location) {
		return weather(location.city);	
	}, function (error) {
		console.log(error);
	}).then(function (currentWeather) {
		console.log(currentWeather);
	}, function (error) {
		console.log(error);

	});

}






