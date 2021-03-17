import {Injectable} from '@angular/core';
import Personagem from '../../models/Personagem';
import {JwtService} from '../jwt/jwt.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HabilidadeService {
  private readonly urlHabilidade = '/habilidade';
  private readonly urlConsultarPorClasse = this.urlHabilidade + '/listar/';

  constructor(private http: HttpClient) {
  }

  public async consultarPorClasse(idClasse: number): Promise<Personagem> {
    const headers = JwtService.header;
    return this.http.get<Personagem>(JwtService.urlAPI + this.urlConsultarPorClasse + idClasse, {headers}).toPromise();
  }
}
