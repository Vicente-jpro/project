import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
  
  clientes: Cliente[] = []
  constructor(private clienteService: ClientesService){

  }
  
  ngOnInit(): void {
    this.clienteService
          .getClientes()
          .subscribe({
            next: response => {
              this.clientes = response
            } 
          })

  }


}
