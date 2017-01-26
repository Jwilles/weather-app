import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { WeatherService}  from './services/weather.service';

import 'rxjs/add/operator/map';

@NgModule({
	imports: [ 
	BrowserModule,
	HttpModule
	 ],
	declarations: [ 
	AppComponent 
	],
	providers: [
	WeatherService
	],
	bootstrap: [ AppComponent ]
})

export class AppModule {}
