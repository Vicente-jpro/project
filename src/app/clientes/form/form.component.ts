import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import {ClientesService} from '../../services/clientes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  value: boolean = false
  success: boolean = false
  cliente: Cliente = new Cliente()
  constructor(private clienteService: ClientesService){
    this.cliente = clienteService.getCliente()

    console.log(this.cliente);
  }

  ngOnInit(): void {
    
  }


  onSubmit(){
    console.log('Cliquei no botao')
    this.clienteService
          .salvar(this.cliente)
          .subscribe( response => {
            console.log(response)
          })
   
  }


}
