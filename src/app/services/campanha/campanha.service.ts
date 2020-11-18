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

  constructor(private http: HttpClient) {
  }

  public async listarCampanhaPorMestre(idUsuario: number): Promise<Campanha[]> {
    const headers = JwtService.instace.header;
    return this.http.get<Campanha[]>(JwtService.instace.urlAPI + this.urlListarPorUsuarioMestre + idUsuario, {headers}).toPromise();
  }
}
