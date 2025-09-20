import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class UnsplashService {
  private apiKey = '2ssJE5l_4PNQCQj4VQ-NvkIDkBTW70hH-yPR-WJX8Yk';

  constructor(private http: HttpClient) {}

  getCityImage(city: string): Observable<string> {
    return this.http
      .get<any>(
        `https://api.unsplash.com/search/photos?query=${city}&client_id=${this.apiKey}`
      )
      .pipe(map((res) => res.results[0]?.urls?.regular || ''));
  }
}
