// src/app/services/mars-rover-photos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MarsRoverPhotosService {
  private apiKey: string = 'bK4NeFCINWIY0gpdGfYLRxyHm7Mm2xxuJzBzaNPZ';
  private apiUrl: string = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos`;

  constructor(private http: HttpClient) { }

  getMarsRoverPhotos(sol: number, page: number): Observable<any> {
    const url = `${this.apiUrl}?sol=${sol}&page=${page}&api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}
