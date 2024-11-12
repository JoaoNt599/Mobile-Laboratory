import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EarthService {
  private apiUrl = 'https://api.nasa.gov/planetary/earth/imagery';
  private apiKey = 'bK4NeFCINWIY0gpdGfYLRxyHm7Mm2xxuJzBzaNPZ';

  constructor(private http: HttpClient) { }

  // Method to search for an image of the Earth based on coordinates and date
  getEarthImage(lat: number, lon: number, date: string): Observable<any> {
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&date=${date}&dim=0.1&api_key=${this.apiKey}`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
