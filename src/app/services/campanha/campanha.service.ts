import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtService} from '../jwt/jwt.service';
import Campanha from '../../models/Campanha';

@Injectable({
  providedIn: 'root'
})
export class CampanhaService {
  private readonly urlCampanha = '/campanha';
  private readonly urlListarPorUsuarioMestre = this.urlCampanha + '/listar/';
  private readonly urlSalvar = this.urlCampanha + '/salvar';

  constructor(private http: HttpClient) {
  }

  public async listarCampanhaPorMestre(idUsuario: number): Promise<Campanha[]> {
    const headers = JwtService.header;
    return this.http.get<Campanha[]>(JwtService.urlAPI + this.urlListarPorUsuarioMestre + idUsuario, {headers}).toPromise();
  }

  public async cadastrar(campanha): Promise<Campanha> {
    const headers = JwtService.header;
    return await this.http.post<Campanha>(JwtService.urlAPI + this.urlSalvar,
      campanha, {headers}).toPromise();
  }
}
