var request = require('request');
//var url = 'http://api.openweathermap.org/data/2.5/weather?q=Ottawa,ca&units=metric&appid=ff062210ba6e38ea7285cc2aa1ede547'; 
var urlBase = 'http://api.openweathermap.org/data/2.5/weather?q=';
var urlUnitID = '&units=metric&appid=ff062210ba6e38ea7285cc2aa1ede547';

module.exports = function (location) {
	
	return new Promise(function(resolve, reject) {
		
		if (!location) {
			reject('Unable to request weather');
		}
	
		var url = urlBase + encodeURIComponent(location) +urlUnitID	
		 request({
			url: url,
       			json: true
		}, function (error, reponse, body) {
			if (error) {
                		reject('Unable to fetch weather.');
			} else {
        			//console.log(body);
               			resolve('Its currently ' + body.main.temp + ' degrees in ' + body.name + '.');
			}
		});	

	});
}                
