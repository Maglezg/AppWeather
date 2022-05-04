import { Component, OnInit } from '@angular/core';
import { Historial } from 'src/app/interfaces/historial';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  datosbusq: any;
  histo: Historial ={
    direccion:"",
    fecha:"",
    tiempo:"",
    viento:"",
  }

  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
  }

  buscar(ciudad: string, pais:string){
    let direccionBusq = ciudad + ", " + pais

    this.weatherService.getlatlong(direccionBusq)
    .subscribe((resp:any)=>{

      this.weatherService.getWeatherBuscador(resp.data[0].latitude,resp.data[0].longitude)
      .subscribe((respw:any)=>{
        respw.dt = respw.dt*1000;
        let fechaHis = new Date(respw.dt);
        this.datosbusq =respw;

        //insert Firebase
        this.histo.direccion =direccionBusq;
        this.histo.fecha = fechaHis.toString();
        this.histo.tiempo=this.datosbusq.weather[0].description;
        this.histo.viento=this.datosbusq.wind.speed;

        this.weatherService.insertHistorial(this.histo)
        .subscribe((resph:any)=> {
          console.log(resph);

        });
        //insert Firebase
      });



    }); 


  }

}
