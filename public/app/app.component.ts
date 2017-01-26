import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<div class="jumbotron">
			<h1>Longitude:  {{geoLoc.longitude}} - Latitude: {{geoLoc.latitude}}</h1>
		</div>
	`,
	styles: [`
		.jumbotron {box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
	`]
})

export class AppComponent implements OnInit {
 	geoLoc = {};  
	setPosition(position){
		this.geoLoc = position.coords;
      		console.log(position.coords);
      	}
	ngOnInit(){
   		if(navigator.geolocation){
      			navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      		};
   	}		

}
