import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NasaService {
  private apiKey: string = 'bK4NeFCINWIY0gpdGfYLRxyHm7Mm2xxuJzBzaNPZ';
  private apiUrl: string = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  getAstronomyPicture(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
