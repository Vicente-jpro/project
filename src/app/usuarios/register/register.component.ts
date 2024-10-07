import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  

  success: boolean = false
  successMessage = ''
  errorMessages = []
  firstName: string = ''
  lastName: string = ''
  usuario: Usuario = new Usuario()
  confirm_password: string = ''

  constructor(private usuarioService: UsuariosService, private router: Router){
  }

  ngOnInit(): void {

  }


  onSubmit(): void{
    
    this.usuario = this.limparEspacosInput(this.usuario)

    if( !(this.usuario.passwrd == this.confirm_password)){
      let mensagems = ['A palavra passe de confirmacao e diferente.']
      console.log(mensagems)
    }else{

      this.usuarioService
      .salvar(this.usuario)
      .subscribe({
        next: response => {
          this.success = true
          console.log(response)
          this.successMessage = 'Usuario salvo com sucesso'
          this.router.navigate(['/usuarios/login']);
        },
        error: errorResponse =>{
          this.success = false
          this.errorMessages = errorResponse.error.errors
          console.log(errorResponse.error.errors)
        }
      })

    }
 
  }

  limparEspacosInput(usuario: Usuario): Usuario{
    
    this.usuario.username = this.firstName.trim() +' '+this.lastName.trim()
    this.usuario.username = this.usuario.username.trim() 
    this.usuario.email = this.usuario.email.trim()
    return usuario;
  }

}
