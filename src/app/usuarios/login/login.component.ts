import { Component, Input, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  @Input() text = ''

  usuario: Usuario = new Usuario()

  constructor(
    private usuarioService: UsuariosService,
    private router: Router
  ){
    
  }
  
  ngOnInit(): void {
 
  }

  onSubmit(){

    this.usuarioService
        .login(this.usuario)
        .subscribe({
          next: response => {
            const access_token = JSON.stringify(response)
            localStorage.setItem('access_token', access_token)
            this.router.navigate(['/home'])
            console.log(response)
          },
          error: errorResposne => {
            console.log(errorResposne)
            console.log(errorResposne.error.erros)
          }
        })
  }

}
