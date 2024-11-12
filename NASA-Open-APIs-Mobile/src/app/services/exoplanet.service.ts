import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExoplanetService {
  private apiUrl: string = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=SELECT+*+FROM+exoplanets+LIMIT+10&format=json';

  constructor(private http: HttpClient) {}

  getExoplanets(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}