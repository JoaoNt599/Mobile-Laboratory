import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OsdrService {
  private apiKey: string = 'bK4NeFCINWIY0gpdGfYLRxyHm7Mm2xxuJzBzaNPZ';
  private apiUrl: string = `https://data.open.science/?api_key=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getOsdrData(): Observable<any> {
    return this.http.get(this.apiUrl); 
  }
}
