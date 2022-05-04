import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datoshome: any;
  datoshome1: any;
  datoshome2: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherHome()
      .subscribe((resp: any)=> {
        console.log(resp);
        this.datoshome =resp;
      })
    
    this.weatherService.getWeatherHome1()
      .subscribe((resp: any)=> {
        console.log(resp);
        this.datoshome1 =resp;
      })

    this.weatherService.getWeatherHome2()
      .subscribe((resp: any)=> {
        console.log(resp);
        this.datoshome2 =resp;
      })

  }

}
