import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MarsWeatherService {
  private apiKey: string = 'bK4NeFCINWIY0gpdGfYLRxyHm7Mm2xxuJzBzaNPZ';
  private apiUrl: string = `https://api.nasa.gov/insight_weather/?api_key=${this.apiKey}&feedtype=json&ver=1.0`;

  constructor(private http: HttpClient) { }

  getMarsWeather(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
