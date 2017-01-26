var request = require('request');
var getKey = require('./getKey');

var urlBase = 'http://api.openweathermap.org/data/2.5/weather?';
var urlUnitID = '&units=metric&appid=';

module.exports = function (loc) {
	
	return new Promise(function(resolve, reject) {
		
		if (!loc) {
			reject('Unable to request weather');
		}
		
		getKey().then((urlApiID) => {
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
			}, (e) => {
				reject(e)
		}); 		

	});
}               	 
