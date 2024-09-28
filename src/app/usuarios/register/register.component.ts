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
  errorMessage = ''
  firstName: string = ''
  lastName: string = ''
  usuario: Usuario = new Usuario()
  confirm_password: string = ''

  constructor(private usuarioService: UsuariosService){
  }

  ngOnInit(): void {

  }

  onSubmit(): void{
    
    this.usuario = this.limparInput(this.usuario)

    this.usuarioService
          .salvar(this.usuario)
          .subscribe({
            next: response => {
              this.success = true
              console.log(response)
              this.successMessage = 'Usuario salvo com sucesso'
            },
            error: response =>{
              this.success = false
              this.errorMessage = response.error
              console.log(response)
            }
          })
 
  }

  limparInput(usuario: Usuario): Usuario{
    
    this.usuario.username = this.firstName.trim() +' '+this.lastName.trim()
    this.usuario.email = this.usuario.email.trim()
    return usuario;
  }

}
