import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  public static urlAPI: string = '/api';

  constructor() {
  }

  public static obterHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }


  public static get header(): HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }

  public static gerarHeader(token): void {
    localStorage.setItem('token', token);
  }

}
