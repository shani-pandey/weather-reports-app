import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/weather.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {

  searchItem:string=""
  popup:boolean = false;
  reportPopup:boolean = false
  cityDefault = [
    {
      name:"Mumbai"
    },
    {
      name:"Delhi"
    },
    {
      name:"Pune"
    },
    {
      name:"Patna"
    },
  ];

  cityName:string = ""
  weahterReport:any;
  tempData:any
  tempType:string = "°C"
  disbaleTypeC:boolean=true;
  disbaleTypeF:boolean=false;
  dateString: number = Date.now();

  constructor(private _weatherSercvice:WeatherService) { }

  ngOnInit(): void {
    
  }

  addCity(data:any){
    let temp = {
      name:data.value
    }
      this.cityDefault.push(temp);
      this.popup = false; 
  }
  removeCity(id:any){
    this.cityDefault.splice(id,1)
  }
  showWeather(city:string){
    console.log(city)
    this.cityName =  city
    this.getWeatherDetaile()
    this.reportPopup = true
  }

  getWeatherDetaile(){
    this._weatherSercvice.getData(this.cityName)
    .subscribe(
      res => {
        let resp = res;
        console.log('Result:', resp)
        this.weahterReport = resp
        this.tempData=this.weahterReport.temp;
      },
      err => {
        console.log('Error', err);
        
      },
    )
  }
 
  cel(c:any){
    this.tempData =(c - 32) / 1.8;
    this.tempType='°C';
    this.disbaleTypeC= true;
    this.disbaleTypeF= false;
  }
  fah(f:any){
    this.tempData =(f * 1.8) + 32
    this.tempType='°F';
    this.disbaleTypeF= true;
    this.disbaleTypeC= false;
  
  }
}
