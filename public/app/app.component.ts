import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { WeatherService } from './services/weather.service';

@Component({
	selector: 'my-app',
	template: `
		<div class="jumbotron">
			<h1>Longitude:  {{geoLoc.longitude}}  Latitude: {{geoLoc.latitude}} Temp: {{weather.temp}}</h1>
		</div>
	`,
	styles: [`
		.jumbotron {box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
	`]
})

export class AppComponent implements OnInit {
 	
	constructor(private service: WeatherService) {}
	
 		
	geoLoc = {};  
	weather = {};
	setPosition(position){
		this.service.getWeather(position.coords).subscribe(resWeather => {
				console.log(resWeather);
				this.weather = resWeather;
			});

		this.geoLoc = position.coords;
      		console.log(position.coords);
      	}
	ngOnInit(){
   		if(navigator.geolocation){
      			navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      		};
   	}		

}
