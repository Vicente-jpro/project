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
    return this.http
          .post<Cliente>(`${this.api_url_base}/clientes`, cliente);
  }

  getClientes(): Observable<Cliente[]>{

    return this.http.get<Cliente[]>(`${this.api_url_base}/clientes`);
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
