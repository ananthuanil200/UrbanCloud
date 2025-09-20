import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather.model';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private apiKey = 'ea689a0c834ce1098e255377f026dc63'; // 🔑 replace with OpenWeatherMap API key
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<Weather> {
    return this.http.get<Weather>(
      `${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`
    );
  }
}
