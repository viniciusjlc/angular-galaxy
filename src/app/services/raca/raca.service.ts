import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtService} from '../jwt/jwt.service';
import Raca from '../../models/Raca';

@Injectable({
  providedIn: 'root'
})
export class RacaService {
  private readonly urlRaca = '/raca';
  private readonly urlListarComAtributos = this.urlRaca + '/listarComAtributos';

  constructor(private http: HttpClient) {
  }

  public async listarRacas(): Promise<Raca[]> {
    const headers = JwtService.header;
    return this.http.get<Raca[]>(JwtService.urlAPI + this.urlListarComAtributos, {headers}).toPromise();
  }
}
