import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../usuarios/usuario';
import { environment } from '../../environments/environment.development';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  api_url_base: string = environment.api_url_base
  api_url_oauth_token: string = environment.api_url_oauth_token
  cliente_id: string = environment.cliente_id
  cliente_secret: string = environment.cliente_secret
  jwtHelper: JwtHelperService = new JwtHelperService()

  constructor(private http: HttpClient) { }

  salvar(usuario: Usuario): Observable<Usuario>{
    return this.http
                .post<Usuario>(`${this.api_url_base}/usuarios`, usuario)
  }

  getByIdUser(idUsuario: number): Observable<Usuario>{
    return this.http 
                .get<Usuario>(`${this.api_url_base}/usuarios/${idUsuario}`)
  }

  login(usuario: Usuario): Observable<any>{

    console.log(this.api_url_oauth_token)
    console.log('username: ', usuario.username.length)
    console.log('password: ', usuario.passwrd.length)

    const params = new HttpParams()
          .set('username', usuario.username)
          .set('password', usuario.passwrd)
          .set('grant_type', 'password')

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic '+ btoa(`${this.cliente_id}:${this.cliente_secret}`)
    }

    return this.http.post(this.api_url_oauth_token.toString(), params.toString(), {headers})
  }

  obterToken(){
    const tokenString = localStorage.getItem('access_token')
    if(tokenString){
      const token = JSON.parse(tokenString).access_token
      return token
    }
    return null
  }

  isAutenticado(): boolean{
    const token = this.obterToken()
    if( token ){
      const espirado = this.jwtHelper.isTokenExpired(token)
      return !espirado
    }
    return false
  }

  terminarSessao(){
    localStorage.removeItem('access_token')
  }

  getUsuarioAutenticado(){
    const token = this.obterToken();
    if ( token ){
      const userName = this.jwtHelper.decodeToken(token).user_name
      return userName
    }
    return null
  }


}
 

// Miguel cordeiro