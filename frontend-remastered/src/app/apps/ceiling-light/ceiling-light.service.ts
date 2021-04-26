import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface CheckBoxes {
  name: string;
  index: number;
  checked: boolean;
}

interface RequestParameters {
  mode:
    | 'OFF'
    | 'DISCO'
    | 'RANDOM'
    | 'STROBE'
    | 'POLICE'
    | 'WHITE'
    | 'STATIC_COLOR';
  r: string;
  g: string;
  b: string;
  kelvin: string;
  brightness: string;
}

@Injectable({
  providedIn: 'root'
})
export class CeilingLightService {
  checkBoxes: CheckBoxes[] = [
    { name: 'Bar 1', index: 0, checked: false },
    { name: 'Bar 2', index: 1, checked: false },
    { name: 'Bar 3', index: 2, checked: false },
    { name: 'Bar 4', index: 3, checked: false },
    { name: 'Bar 5', index: 4, checked: false },
    { name: 'Bar 6', index: 5, checked: false },
    { name: 'Gang 1', index: 6, checked: false },
    { name: 'Gang 2', index: 7, checked: false },
    { name: 'Billiardlicht', index: 8, checked: false },
  ];
  readonly address = 'http://basementpi.fritz.box:7979';

  constructor(private http: HttpClient) {}

  sendRequest(params: RequestParameters): Observable<string> {
    let bulbs: string = this.getBulbString();

    const httpParams = new HttpParams()
      .set('mode', params.mode)
      .set('r', params.r)
      .set('g', params.g)
      .set('b', params.b)
      .set('bulbs', bulbs)
      .set('kelvin', params.kelvin)
      .set('brightness', params.brightness);

    let HTTPOptions: Object = {
      params: httpParams,
      responseType: 'text',
    };

    return this.http.get<string>(`${this.address}/ceilingLight`, HTTPOptions);
  }

  getBulbString(): string {
    let bulbs = '';
    this.checkBoxes.forEach((element) => {
      if (element.checked) {
        if (bulbs !== '') bulbs += ',';
        bulbs += element.index;
      }
    });
    return bulbs;
  }
}
