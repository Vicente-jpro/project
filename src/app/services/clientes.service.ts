import { Injectable } from '@angular/core';
import { Cliente } from '../clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  httOptions = {
    headers: {
      'Content-Type':  'application/json',
       Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3Mjc2OTExMDgsInVzZXJfbmFtZSI6IlZpY2VudGUgU2ltYW8iLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiNjVlMGNiN2YtNmI2Zi00ZTJmLTk4MmYtZjhjNWViMzU2ZmU3IiwiY2xpZW50X2lkIjoibXktYW5ndWxhci1hcHAiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.NDcZfNDCyCAK5UnGYsw3GM5LSOMSir5bVT3vrAnNEbU'
    }
  }

  URL: string = environment.apiURLBase

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente): Observable<Cliente>{
    return this.http
          .post<Cliente>(`${URL}/clientes`, cliente);
  }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${URL}/clientes`, {
      headers: {
        'Content-Type':  'application/json',
         Authorization: 'Bearer Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3Mjc2OTExMDgsInVzZXJfbmFtZSI6IlZpY2VudGUgU2ltYW8iLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiNjVlMGNiN2YtNmI2Zi00ZTJmLTk4MmYtZjhjNWViMzU2ZmU3IiwiY2xpZW50X2lkIjoibXktYW5ndWxhci1hcHAiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.NDcZfNDCyCAK5UnGYsw3GM5LSOMSir5bVT3vrAnNEbU'
      }
    });
  }

  getCliente(): Cliente{
    let cliente: Cliente = new Cliente
    cliente.bi = '12324243PK000'
    cliente.dataCadastro = '2016/07/10'
    cliente.idCliente = 0
    cliente.nome = 'Frango albertopp'
    return cliente;
  }
}
