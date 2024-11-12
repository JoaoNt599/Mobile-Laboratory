import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsteroidsService {
  private apiKey: string = 'bK4NeFCINWIY0gpdGfYLRxyHm7Mm2xxuJzBzaNPZ';
  private apiUrl: string = `https://api.nasa.gov/neo/rest/v1/feed?api_key=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  getAsteroids(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
