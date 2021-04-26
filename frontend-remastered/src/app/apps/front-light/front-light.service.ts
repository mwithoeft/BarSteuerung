import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class Color {
  readonly r: string;
  readonly g: string;
  readonly b: string;
  constructor(r: string, g: string, b: string) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

@Injectable({
  providedIn: 'root',
})
export class FrontLightService {
  readonly address = 'http://basementpi.fritz.box:7979';

  constructor(private http: HttpClient) {}

  requestWithoutParams(requestName: string): Observable<string> {
    const httpOptions: Object = {
      responseType: 'text',
    };

    return this.http.get<string>(`${this.address}/${requestName}`, httpOptions);
  }

  setSpeed(speed: number): Observable<string> {
    const params = new HttpParams().set('speed', speed.toString());

    let httpOptions: Object = {
      params: params,
      responseType: 'text',
    };

    return this.http.get<string>(`${this.address}/setSpeed`, httpOptions);
  }

  setStaticColor(r: string, g: string, b: string): Observable<string> {
    const params = new HttpParams().set('r', r).set('g', g).set('b', b);

    let httpOptions: Object = {
      params: params,
      responseType: 'text',
    };

    return this.http.get<string>(`${this.address}/staticColor`, httpOptions);
  }

  setSplitColor(
    type: 'staticSplit' | 'floatingSplit' | 'pulse',
    colors: Color[]
  ): Observable<string> {
    const params = new HttpParams().set('array', this.getColorString(colors));

    let httpOptions: Object = {
      params: params,
      responseType: 'text',
    };

    return this.http.get<string>(`${this.address}/${type}`, httpOptions);
  }

  private getColorString(colors: Color[]): string {
    let colorString = '';
    colors.forEach((element) => {
      if (colorString !== '') colorString += ',';
      colorString += `${element.r},${element.g},${element.b}`;
    });
    return colorString;
  }
}
