import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CityFactService {
  constructor(private http: HttpClient) {}

  getCityFact(city: string): Observable<any> {
    return this.http.get<any>(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${city}`
    );
  }
}
