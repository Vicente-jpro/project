import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
  
  success: boolean = false
  successMessage: string = ''
  errorMessages = []
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

  eliminar(cliente: Cliente){
    this.clienteService
        .eliminar(cliente)
        .subscribe({
          next: response => {
            this.success = true 
            this.clientes = this.clientes
                                .filter( clt => cliente.id != clt.id)
            this.successMessage = "Cliente eliminado com sucesso."

          },
          error: errorResponse => {
            this.errorMessages = errorResponse.error.errors
          }
        })
 
  }


}
