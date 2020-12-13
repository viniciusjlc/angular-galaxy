import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() {
    this._header = new HttpHeaders();
  }

  // tslint:disable-next-line:variable-name
  private static _instace: JwtService;
  private _header: HttpHeaders;
  public urlAPI: string = '/api';


  static get instace(): JwtService {
    if (this._instace == null) {
      this._instace = new JwtService();
    }
    return this._instace;
  }


  get header(): HttpHeaders {
    this._header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this._header;
  }

  public gerarHeader(token): void {
    localStorage.setItem('token', token);
  }

}
