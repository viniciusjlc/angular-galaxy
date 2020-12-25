import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Versao} from '../../models/Versao';
import {JwtService} from '../jwt/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class VersaoService {
  private readonly urlVersao = '/versao';
  private readonly urlListar = this.urlVersao + '/listar';
  private readonly urlRetonarVersaoAtual = this.urlVersao + '/retornarAtual';

  constructor(private http: HttpClient) {
  }

  public async listar(): Promise<Versao[]> {
    return this.http.get<Versao[]>(JwtService.instace.urlAPI + this.urlListar).toPromise();
  }

  public async retornarVersaoAtual(): Promise<Versao> {
    return this.http.get<Versao>(JwtService.instace.urlAPI + this.urlRetonarVersaoAtual).toPromise();
  }
}
