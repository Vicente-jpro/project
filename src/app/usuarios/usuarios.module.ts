import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsuariosRoutingModule,
  ],
  exports:[
    RegisterComponent
  ]
})
export class UsuariosModule { }
