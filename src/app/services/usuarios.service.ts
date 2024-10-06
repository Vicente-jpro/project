import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../usuarios/usuario';
import { UsuarioLogin } from '../usuarios/usuarioLogin';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  URL: string = environment.apiURLBase
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  salvar(usuario: Usuario): Observable<Usuario>{
    return this.http
                .post<Usuario>(`${URL}/usuarios`,
                  usuario,
                  this.httpOptions
                 )
  }

  getByIdUser(idUsuario: number): Observable<Usuario>{
    return this.http 
                .get<Usuario>(`${URL}/usuarios/${idUsuario}`,
                  this.httpOptions
                )
  }

  login(usuarioLogin: UsuarioLogin): Observable<any>{
    return this.http.post<any>(`${URL}/oauth/token`, usuarioLogin)
  }
}
