import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../usuarios/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  salvar(usuario: Usuario): Observable<Usuario>{
    return this.http
                .post<Usuario>('http://localhost:8080/api/usuarios',
                  usuario,
                  this.httpOptions
                 )
  }
}
