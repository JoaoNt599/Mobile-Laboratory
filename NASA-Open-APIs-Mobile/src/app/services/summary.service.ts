import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  private apiUrl = 'http://localhost:5000/summarize';

  constructor(private http: HttpClient) { }

  summarizeText(text: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { text });
  }
}
