var request = require('request');

var urlBase = 'http://api.openweathermap.org/data/2.5/weather?';
var urlUnitID = '&units=metric&appid=';
var urlApiID = process.env.KEY || 'ff062210ba6e38ea7285cc2aa1ede547';



module.exports = function (loc) {
	
	return new Promise(function(resolve, reject) {
		
		if (!loc) {
			reject('Unable to request weather');
		}
		
		urlLoc = 'lat=' + loc.lat + '&lon=' + loc.lon;	
		var url = urlBase + urlLoc + urlUnitID + urlApiID;	
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
