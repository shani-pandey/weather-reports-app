import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 

  constructor(private http:HttpClient) { }

  getData(cityName:any){
    let headers = new HttpHeaders()
    headers = headers.set('X-RapidAPI-Key', 'd39d5008e3mshfa270aa75ef2d35p1cac16jsnbcaf0677056a');
    headers = headers.set('X-RapidAPI-Host', 'weather-by-api-ninjas.p.rapidapi.com');
   return this.http.request('GET', `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`, { headers })
  }
}
