import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import {ClientesService} from '../../services/clientes.service';
import { DateFormatter } from '../../utils/DateFormatter';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  value: boolean = false
  success: boolean = false
  cliente: Cliente = new Cliente()
  successMessage: string = ''
  errorMessages = [] 


  constructor(private clienteService: ClientesService,
    private router: Router,
    private ativatedRoute: ActivatedRoute
  ){
   
    console.log(this.cliente);
  }

  ngOnInit(): void {

    this.ativatedRoute.params.subscribe(params => {
      if (params['id'] != null ){
        
        this.cliente.id = params['id']

        this.clienteService.getClienteById(this.cliente.id)
            .subscribe({
              next: response => {
                this.cliente = response
            },
            error: errorResponse => {
              this.errorMessages = errorResponse.error.errors
            }
          })
        console.log(this.cliente)
      
      }
    })
  }


  onSubmit(){
    console.log('Cliquei no botao')
  
    let data = new DateFormatter(this.cliente.dataCadastro)
    console.log(this.cliente.dataCadastro)
  
    this.cliente.dataCadastro = data.getDate()
  
    this.clienteService
          .salvar(this.cliente)
          .subscribe({
            next: response => {
              this.router.navigate(['/clientes'])
              console.log(response)
            },
            error: errorResponse => {
              console.log(this.cliente)
              console.log(errorResponse)
            }
          })
   
  }


}
