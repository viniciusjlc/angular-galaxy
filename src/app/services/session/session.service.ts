import {Injectable} from '@angular/core';
import {Usuario} from '../../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor() {
  }

  static get instace(): SessionService {
    if (this._instace == null) {
      this._instace = new SessionService();
    }
    return this._instace;
  }


  get userSession(): Usuario {
    return this._userSession;
  }

  get isLogado(): boolean {
    return this._isLogado;
  }

  // tslint:disable-next-line:variable-name
  private static _instace: SessionService;
  // tslint:disable-next-line:variable-name
  private _userSession: Usuario;
  // tslint:disable-next-line:variable-name
  private _isLogado: boolean = false;

  static destruirSessao(): void {
    this._instace = new SessionService();
    this.instace._userSession = null;
    this.instace._isLogado = false;
    localStorage.removeItem('userSession');
    localStorage.removeItem('token');
  }

  public gravarUsuario(usuario): void {
    this._userSession = usuario;
    this._isLogado = true;
    localStorage.setItem('userSession', JSON.stringify(usuario));
  }

}
