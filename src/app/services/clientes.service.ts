import { Injectable } from '@angular/core';
import { Cliente } from '../clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente): Observable<Cliente>{
    return this.http
          .post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }
  getCliente(): Cliente{
    let cliente: Cliente = new Cliente
    cliente.bi = '12324243PK000'
    cliente.dataCadastro = '2016/07/10'
    cliente.idCliente = 1
    cliente.nome = 'Frango albertopp'
    return cliente;
  }
}
