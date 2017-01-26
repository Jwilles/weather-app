var request = require('request');
//var url = 'http://api.openweathermap.org/data/2.5/weather?q=Ottawa,ca&units=metric&appid=ff062210ba6e38ea7285cc2aa1ede547'; 
var urlBase = 'http://api.openweathermap.org/data/2.5/weather?';
var urlUnitID = '&units=metric&appid=ff062210ba6e38ea7285cc2aa1ede547';
var urlAppID = process.env.


module.exports = function (loc) {
	
	return new Promise(function(resolve, reject) {
		
		if (!loc) {
			reject('Unable to request weather');
		}
		
		urlLoc = 'lat=' + loc.lat + '&lon=' + loc.lon	
		var url = urlBase + urlLoc +urlUnitID	
		 request({
			url: url,
       			json: true
		}, function (error, reponse, body) {
			if (error) {
                		reject('Unable to fetch weather.');
			} else {
               			resolve(body);
			}
		});	

	});
}                
