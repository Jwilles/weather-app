var fs = require('fs');


module.exports = function() {

	return new Promise(function(resolve, reject) {
		 fs.readFile('./README.md', 'utf8', (err, data) => {
			if (err) {
				reject(err);	
			} else if (data) {
				var arr = data.split('apiKey =');
		                resolve(arr[1].trim());
			} else {
				reject('Unable to read API key');
			}			 
		}); 
	}); 	
}                             
                              
