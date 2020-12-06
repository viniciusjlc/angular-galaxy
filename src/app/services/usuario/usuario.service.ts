import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Token} from '../../models/Token';
import {JwtService} from '../jwt/jwt.service';
import {Usuario} from '../../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {
  }
  private readonly urlAutenticar = '/autenticar';
  private readonly urlConsultarPorEmail = '/usuario/consultarPorEmail';
  private readonly urlCadastrarUsuario = '/usuario/salvar';

  public async retonarUsuarioSessao(): Promise<Usuario> {
    return this.consultarPorEmail({
      email: localStorage.getItem('emailUserSession'), senha: null
    });
  }

  public async autenticar(usuario: Usuario): Promise<boolean> {
    let erro: string = null;
    const retorno = await this.http.post<Token>(JwtService.instace.urlAPI + this.urlAutenticar, {
      email: usuario.email,
      senha: usuario.senha
    });
    await retorno.toPromise().then(value => JwtService.instace.gerarHeader(value.token))
      .catch(reason => erro = reason.error.erro.toString());
    if (erro != null) {
      console.log(erro);
    }
    return erro == null;
  }

  public async cadastrar(usuario): Promise<boolean> {
    const retorno = await this.http.post<Usuario>(JwtService.instace.urlAPI + this.urlCadastrarUsuario, usuario);
    let retornoAutenticao: boolean;
    retornoAutenticao = await retorno.toPromise().then(value => this.autenticar(usuario));
    return retornoAutenticao;
  }

  public async consultarPorEmail(usuario): Promise<Usuario> {
    const headers = JwtService.instace.header;
    return this.http.post<Usuario>(JwtService.instace.urlAPI + this.urlConsultarPorEmail, usuario, {headers}).toPromise();
  }
}

