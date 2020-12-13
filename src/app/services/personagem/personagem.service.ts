import {Injectable} from '@angular/core';
import {JwtService} from '../jwt/jwt.service';
import {HttpClient} from '@angular/common/http';
import Personagem from '../../models/Personagem';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {
  private readonly urlPersonagem = '/personagem';
  private readonly urlListarPorUsuario = this.urlPersonagem + '/listar/';

  constructor(private http: HttpClient) {
  }

  public async listarPersonagensPorUsuario(idUsuario: number): Promise<Personagem[]> {
    const headers = JwtService.instace.header;
    return this.http.get<Personagem[]>(JwtService.instace.urlAPI + this.urlListarPorUsuario + idUsuario, {headers}).toPromise();
  }

}
