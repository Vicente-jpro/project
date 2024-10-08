import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit{

  username: string = ''
  constructor(private usuarioService: UsuariosService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.username = this.usuarioService.getUsuarioAutenticado()
  }

  logout(){
    this.usuarioService.terminarSessao();
    this.router.navigate(['/usuarios/login'])
  }

}
