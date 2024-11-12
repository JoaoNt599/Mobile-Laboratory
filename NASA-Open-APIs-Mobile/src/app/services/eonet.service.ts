import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EonetService {
  private apiKey: string = 'bK4NeFCINWIY0gpdGfYLRxyHm7Mm2xxuJzBzaNPZ';
  private apiUrl: string = `https://eonet.sci.gsfc.nasa.gov/?api_key=${this.apiKey}`;  // /api/v2.1/events

  constructor(private http: HttpClient) {}

  getEonetEvents(): Observable<any> {
    return this.http.get(this.apiUrl); 
  }
}
