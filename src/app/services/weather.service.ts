import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Historial } from '../interfaces/historial';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

   getWeatherHome(){
     return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=42.282660835017396&lon=-8.68495182170636&appid=f071feddd7103ab314d6db12aa8275cb`);
   }

   getWeatherHome1(){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=41.547217094590856&lon=2.107186179151628&appid=f071feddd7103ab314d6db12aa8275cb`);
    
  }
  getWeatherHome2(){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=40.00097855531734&lon=3.8351682251672896&appid=f071feddd7103ab314d6db12aa8275cb`);
   
  }
  getlatlong(direccion:string){
    return this.http.get(`http://api.positionstack.com/v1/forward?access_key=f6cb15f57842bb286e933e4ee69bea8b&query=${direccion}`);
  }
  getWeatherBuscador(lat:any, long:any){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=f071feddd7103ab314d6db12aa8275cb`);
  }
  
  insertHistorial(hist:Historial){
    return this.http.post(`https://weather-app-8822d-default-rtdb.firebaseio.com/Historial.json`,hist);
  }

  getHistorico(){
    return this.http.get(`https://weather-app-8822d-default-rtdb.firebaseio.com/Historial.json`);
  }

}
