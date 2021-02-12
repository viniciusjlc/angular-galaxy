import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtService} from '../jwt/jwt.service';
import Classe from '../../models/Classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  private readonly urlClasse = '/classe';
  private readonly urlListar = this.urlClasse + '/listar';

  constructor(private http: HttpClient) {
  }

  public async listarClasses(): Promise<Classe[]> {
    const headers = JwtService.header;
    return this.http.get<Classe[]>(JwtService.urlAPI + this.urlListar, {headers}).toPromise();
  }
}
