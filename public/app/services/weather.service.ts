import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {

	constructor(private http: Http) {}

	getWeather(location) {
	
		return this.http.get('/weather/' + location.latitude + '/' + location.longitude)
			.map(res => res.json());
			
	}

}
