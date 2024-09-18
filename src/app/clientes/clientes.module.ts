import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientesRoutingModule } from './clientes-routing.module';
import { FormComponent } from './form/form.component';
import { ShowComponent } from './show/show.component';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [
    FormComponent,
    ShowComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ],
  exports:[
    FormComponent,
    ShowComponent,
    IndexComponent
  ]
})
export class ClientesModule { }
