import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpicService {
  private apiKey: string = 'bK4NeFCINWIY0gpdGfYLRxyHm7Mm2xxuJzBzaNPZ';
  private apiUrl: string = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getEpicImages(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getEpicImageUrl(imageName: string, date: string): string {
    const [year, month, day] = date.split('-');
    return `https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${day}/jpg/${imageName}.jpg?api_key=${this.apiKey}`;
  }
}
