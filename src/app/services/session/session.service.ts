import {Injectable} from '@angular/core';
import {Usuario} from '../../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor() {
  }

  public static destruirSessao(): void {
    localStorage.removeItem('userSession');
    localStorage.removeItem('token');
  }

  public static isLogado(): boolean {
    return JSON.parse(localStorage.getItem('userSession')) != null;
  }

  public static obterUsuarioSessao(): Usuario {
    return JSON.parse(localStorage.getItem('userSession'));
  }

  public static gravarUsuarioSessao(usuario): void {
    localStorage.setItem('userSession', JSON.stringify(usuario));
  }
}
