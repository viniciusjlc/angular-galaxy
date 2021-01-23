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
  private readonly urlSalvarUsuario = this.urlPersonagem + '/salvar';
  private readonly urlExcluirUsuario = this.urlPersonagem + '/';
  private readonly urlConsultarPorId = this.urlPersonagem + '/';

  constructor(private http: HttpClient) {
  }

  public async listarPersonagensPorUsuario(idUsuario: number): Promise<Personagem[]> {
    const headers = JwtService.instace.header;
    return this.http.get<Personagem[]>(JwtService.instace.urlAPI + this.urlListarPorUsuario + idUsuario, {headers}).toPromise();
  }

  public async cadastrar(personagem: Personagem): Promise<Personagem> {
    const headers = JwtService.instace.header;
    return this.http.post<Personagem>(JwtService.instace.urlAPI + this.urlSalvarUsuario, personagem, {headers}).toPromise();
  }

  public async consultarPersonagemPorId(idPersonagem: number): Promise<Personagem> {
    const headers = JwtService.instace.header;
    return this.http.get<Personagem>(JwtService.instace.urlAPI + this.urlConsultarPorId + idPersonagem, {headers}).toPromise();
  }

  public async excluirPersonagemPorId(idPersonagem: number): Promise<void> {
    const headers = JwtService.instace.header;
    return this.http.delete<void>(JwtService.instace.urlAPI + this.urlExcluirUsuario + idPersonagem, {headers}).toPromise();
  }
}
