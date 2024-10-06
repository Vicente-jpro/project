import { Component, Input, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  @Input() text = ''

  usuario: Usuario = new Usuario()

  constructor(private usuarioService: UsuariosService){
    
  }
  
  ngOnInit(): void {
 
  }

  onSubmit(){

    this.usuarioService
        .login(this.usuario)
        .subscribe({
          next: response => {
            console.log(response)
          },
          error: errorResposne => {
            console.log(errorResposne)
          }
        })
    console.log(this.usuario)
  }

}
