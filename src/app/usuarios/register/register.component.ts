import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from '../../services/usuarios.service';

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

  constructor(private usuarioService: UsuariosService){
  }

  ngOnInit(): void {

  }


  onSubmit(): void{
    
    this.usuario = this.limparEspacosInput(this.usuario)

    this.usuarioService
          .salvar(this.usuario)
          .subscribe({
            next: response => {
              this.success = true
              console.log(response)
              this.successMessage = 'Usuario salvo com sucesso'
            },
            error: errorResponse =>{
              this.success = false
              this.errorMessages = errorResponse.error.errors
              console.log(errorResponse.error.errors)
            }
          })
 
  }

  limparEspacosInput(usuario: Usuario): Usuario{
    
    this.usuario.username = this.firstName.trim() +' '+this.lastName.trim()
    this.usuario.email = this.usuario.email.trim()
    return usuario;
  }

}
