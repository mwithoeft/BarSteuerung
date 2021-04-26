import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShelfLightService {
  readonly address = 'http://basementpi.fritz.box:7979';

  constructor(private http: HttpClient) {}

  setShelfLightColor(r: string, g: string, b: string): Observable<string> {
    const params = new HttpParams().set('r', r).set('g', g).set('b', b);

    let HTTPOptions: Object = {
      params: params,
      responseType: 'text',
    };

    return this.http.get<string>(`${this.address}/shelfColor`, HTTPOptions);
  }
}
