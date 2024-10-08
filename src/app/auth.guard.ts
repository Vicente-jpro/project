import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UsuariosService } from './services/usuarios.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private usuarioService: UsuariosService,
    private router: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    const autenticado = this.usuarioService.isAutenticado()
    if( autenticado ){
      return true
    }else{
      this.router.navigate(['/login'])
    }

    return false
  }
  
}