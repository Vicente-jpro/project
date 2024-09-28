import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  firstName: string = ''
  lastName: string = ''
  usuario: Usuario = new Usuario()
  confirm_password: string = ''

  constructor(){
  }

  ngOnInit(): void {

  }

  onSubmit(): void{
    this.usuario.username = this.firstName +' '+this.lastName
    console.log(this.usuario)
    console.log('Hello ')
    alert('hello')
  }

}
