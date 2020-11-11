import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Mensagem} from '../../models/Mensagem';
import {JwtService} from '../jwt/jwt.service';
import {ItemUniverso} from '../../models/ItemUniverso';

@Injectable({
  providedIn: 'root'
})
export class UniversoService {
  private readonly urlMensagem = '/universo';
  private readonly urlListarItensUniverso = this.urlMensagem + '/listarItensUniverso';

  constructor(private http: HttpClient) {
  }

  public async listarItensUniverso(): Promise<ItemUniverso[]> {
    return this.http.get<ItemUniverso[]>(JwtService.instace.urlAPI + this.urlListarItensUniverso).toPromise();
  }
}
