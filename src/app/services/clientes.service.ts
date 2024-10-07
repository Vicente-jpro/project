import { Injectable } from '@angular/core';
import { Cliente } from '../clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  api_url_base: string = environment.api_url_base

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente): Observable<Cliente>{
    // http://localhost:8080/api `${this.api_url_base}/clientes`
    return this.http
          .post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }

  getClientes(): Observable<Cliente[]>{

    return this.http.get<Cliente[]>(`${this.api_url_base}/clientes`);
  }

  getCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.api_url_base}/clientes/${cliente.id}`);
  }

  eliminar(cliente: Cliente): Observable<any>{
    return this.http.delete(`${this.api_url_base}/clientes/${cliente.id}`, )
  }
}
