import {Injectable} from '@angular/core';
import {JwtService} from '../jwt/jwt.service';
import {HttpClient} from '@angular/common/http';
import Habilidade from '../../models/Habilidade';

@Injectable({
  providedIn: 'root'
})
export class HabilidadeService {
  private readonly urlHabilidade = '/habilidade';
  private readonly urlConsultarPorClasse = this.urlHabilidade + '/listar/';

  constructor(private http: HttpClient) {
  }

  public async consultarPorClasse(idClasse: number): Promise<Habilidade[]> {
    const headers = JwtService.header;
    return this.http.get<Habilidade[]>(JwtService.urlAPI + this.urlConsultarPorClasse + idClasse, {headers}).toPromise();
  }
}
