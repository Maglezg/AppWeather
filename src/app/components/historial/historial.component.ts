import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  data:any=[];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {

    this.weatherService.getHistorico()
    .subscribe((resp: any)=>{

      Object.keys(resp).forEach(key =>{
        const element: any = resp[key];
        element.id = key;
        this.data.push(element);

      })

    });

  }

}
