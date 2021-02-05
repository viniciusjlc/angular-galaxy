import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Planeta} from '../../models/Planeta';
import {JwtService} from '../jwt/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class PlanetaService {
  private readonly urlPlaneta = '/planeta';

  constructor(private http: HttpClient) {
  }

  public async consultar(id): Promise<Planeta> {
    const headers = JwtService.instace.header;
    return this.http.get<Planeta>(JwtService.instace.urlAPI + this.urlPlaneta + '/' + id, {headers}).toPromise();
  }
}
