import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtService} from '../jwt/jwt.service';
import {ZonaGalactica} from '../../models/ZonaGalactica';

@Injectable({
  providedIn: 'root'
})
export class ZonaGalacticaService {
  private readonly urlZonaGalactica = '/zonaGalactica';
  private readonly urlListar = this.urlZonaGalactica + '/listar';

  constructor(private http: HttpClient) {
  }

  public async listar(): Promise<ZonaGalactica[]> {
    const headers = JwtService.obterHeader();
    return this.http.get<ZonaGalactica[]>(JwtService.urlAPI + this.urlListar, {headers}).toPromise();
  }
}
