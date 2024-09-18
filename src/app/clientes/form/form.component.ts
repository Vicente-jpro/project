import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  cliente: Cliente = new Cliente()
  
  constructor(){
    this.cliente.nome = "Vicente Simao"

  }
  ngOnInit(): void {
    
  }

}
