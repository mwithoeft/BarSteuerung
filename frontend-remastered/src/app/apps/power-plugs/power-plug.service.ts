import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PowerPlugService {
  readonly address = 'http://192.168.178.100:7979';
  readonly httpOptions: Object = {
    responseType: 'text',
  };

  constructor(private http: HttpClient) {}

  status(): Observable<string> {
    return this.http.get<string>(
      `${this.address}/powerPlugsStatus`,
      this.httpOptions
    );
  }

  allOn(): Observable<string> {
    return this.http.get<string>(
      `${this.address}/allPowerPlugsOn`,
      this.httpOptions
    );
  }

  allOff(): Observable<string> {
    return this.http.get<string>(
      `${this.address}/allPowerPlugsOff`,
      this.httpOptions
    );
  }

  frontOn(): Observable<string> {
    return this.http.get<string>(`${this.address}/frontTVOn`, this.httpOptions);
  }

  frontOff(): Observable<string> {
    return this.http.get<string>(
      `${this.address}/frontTVOff`,
      this.httpOptions
    );
  }

  backOn(): Observable<string> {
    return this.http.get<string>(`${this.address}/backTVOn`, this.httpOptions);
  }

  backOff(): Observable<string> {
    return this.http.get<string>(`${this.address}/backTVOff`, this.httpOptions);
  }
}
