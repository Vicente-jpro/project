import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import {ClientesService} from '../../services/clientes.service';
import { DateFormatter } from '../../utils/DateFormatter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  value: boolean = false
  success: boolean = false
  cliente: Cliente = new Cliente()



  constructor(private clienteService: ClientesService,
    private router: Router
  ){
   
    console.log(this.cliente);
  }

  ngOnInit(): void {
    
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
