import {Injectable} from '@angular/core';
import {JwtService} from '../jwt/jwt.service';
import {HttpClient} from '@angular/common/http';
import Habilidade from '../../models/Habilidade';
import Personagem from '../../models/Personagem';

@Injectable({
  providedIn: 'root'
})
export class HabilidadeService {
  private readonly urlHabilidade = '/habilidade';
  private readonly urlConsultarPorClasse = this.urlHabilidade + '/listar/';
  private readonly urlComprarHabilidade = this.urlHabilidade + '/comprarHabilidade';

  constructor(private http: HttpClient) {
  }

  public async consultarPorClasse(idClasse: number): Promise<Habilidade[]> {
    const headers = JwtService.header;
    return this.http.get<Habilidade[]>(JwtService.urlAPI + this.urlConsultarPorClasse + idClasse, {headers}).toPromise();
  }

  public async comprarHabilidade(cadastroHabilidadePersonagemForm): Promise<void> {
    const headers = JwtService.header;
    return this.http.post<void>(JwtService.urlAPI + this.urlComprarHabilidade, cadastroHabilidadePersonagemForm, {headers}).toPromise();
  }
}
