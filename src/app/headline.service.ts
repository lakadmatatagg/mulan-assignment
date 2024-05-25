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
  private apiUrl = 'http://54.255.169.176:3000/api/headlines';

  constructor(private http: HttpClient) {}

  getHeadlines(): Observable<Headline[]> {
    return this.http.get<Headline[]>(this.apiUrl);
  }
}
