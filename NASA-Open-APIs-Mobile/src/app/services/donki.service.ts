import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DonkiService {
  private apiUrl = 'https://api.nasa.gov/DONKI/FLR';
  private apiKey = 'bK4NeFCINWIY0gpdGfYLRxyHm7Mm2xxuJzBzaNPZ';

  constructor(private http: HttpClient) { }

  // Method to search for solar events
  getDonkiData(startDate: string, endDate: string): Observable<any> {
    const url =  `${this.apiUrl}?startDate=${startDate}&endDate=${endDate}&api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}
