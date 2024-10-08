import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
  
  success: boolean = false
  successMessage: string = ''
  errorMessages = []
  clientes: Cliente[] = []
  constructor(private clienteService: ClientesService, 
    private router: Router
  ){

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

  editar(cliente: Cliente){
    this.router.navigate([`/clientes/form/${cliente.id}`])
    console.log(cliente)
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
