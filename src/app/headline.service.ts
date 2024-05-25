import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Headline {
  title: string;
  link: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class HeadlineService {
  private apiUrl = 'https://tigasatutiga.com/api/headlines';

  constructor(private http: HttpClient) {}

  getHeadlines(): Observable<Headline[]> {
    return this.http.get<Headline[]>(this.apiUrl);
  }
}
