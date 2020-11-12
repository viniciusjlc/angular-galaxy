import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtService} from '../jwt/jwt.service';
import {Mensagem} from '../../models/Mensagem';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {
  private readonly urlMensagem = '/mensagem';
  private readonly urlListarMensagensPorTipo = this.urlMensagem + '/listarPorTipo/';

  constructor(private http: HttpClient) {
  }

  public async listarMensagensPorTipo(tipo: string): Promise<Mensagem[]> {
    return this.http.get<Mensagem[]>(JwtService.instace.urlAPI + this.urlListarMensagensPorTipo + tipo).toPromise();
  }

}
