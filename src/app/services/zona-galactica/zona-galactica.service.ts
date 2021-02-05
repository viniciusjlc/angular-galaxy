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
    const headers = JwtService.instace.header;
    return this.http.get<ZonaGalactica[]>(JwtService.instace.urlAPI + this.urlListar, {headers}).toPromise();
  }
}
