import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { WeatherService } from './services/weather.service';

@Component({
	selector: 'my-app',
	template: `
		<header>
			<div class="page-header">
				<h2>Welcome to your local weather app!</h2>	
			</div>
		</header>
		<div class="jumbotron" >
			<h3 class="text-center">Your local temperature is: {{weather.temp}} degrees!</h3>
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
				this.weather = resWeather.main;
			});

		this.geoLoc = position.coords;
      	}
	ngOnInit(){
   		if(navigator.geolocation){
      			navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      		};
   	}		

}
