import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WorkLightService {
  constructor(private http: HttpClient) {}

  setWorkLightColor(r: string, g: string, b: string): Observable<any> {
    const address = 'http://192.168.178.100:7979';

    const params = new HttpParams().set('r', r).set('g', g).set('b', b);
    return this.http.get(`${address}/workingAreaColor`, { params });
  }
}
