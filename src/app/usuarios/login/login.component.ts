import { Component, Input, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioLogin } from '../usuarioLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  @Input() text = ''

  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  constructor(private usuarioService: UsuariosService){
    
  }
  
  ngOnInit(): void {
 
  }

  onSubmit(){

    this.usuarioService
        .login(this.usuarioLogin)
        .subscribe({
          next: response => {
            console.log(response)
          },
          error: errorResposne => {
            console.log(errorResposne)
          }
        })
    console.log(this.usuarioLogin)
  }

}
