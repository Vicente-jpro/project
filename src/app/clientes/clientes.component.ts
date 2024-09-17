import { Component } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

  clientes: Cliente[] 
  constructor(){
    let cliente1: Cliente = new Cliente("Vicente", 23)
    let cliente2: Cliente = new Cliente("Luisa", 50)
    let cliente3: Cliente = new Cliente("Madalena", 50)
      
    this.clientes = [cliente1, cliente2, cliente3]
}
  

  nome: string = 'Esse e o meu nome. Vicente Simao ppppp'
}
