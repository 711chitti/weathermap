import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class WeatherService {

  // apiKey= 'fc0c4e1ec49d0c022df6519574a1a2ca';
  apiKey= '0807c0cd1d2981aaac6c1e58944a3295';

  url;
  constructor(public http: Http) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  }
  getWeather(city, code) {
    return this.http.get(this.url + city + ',' + code + '&APPID=' + this.apiKey).map( res => res.json());

  }


}
