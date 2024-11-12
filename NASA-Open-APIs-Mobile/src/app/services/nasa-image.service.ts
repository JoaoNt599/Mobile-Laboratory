import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NasaImageService {
  private apiUrl = 'https://images-api.nasa.gov';

  constructor(private http: HttpClient) {}

  searchMedia(query: string, mediaType: string = 'image'): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?q=${query}&media_type=${mediaType}`);
  }

  getMetadata(nasaId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/metadata/${nasaId}`);
  }

  getCaptions(nasaId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/captions/${nasaId}`);
  }

  getAssets(nasaId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/asset/${nasaId}`);
  }
}
