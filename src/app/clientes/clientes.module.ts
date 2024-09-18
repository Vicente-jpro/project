import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    ClientesRoutingModule
  ],
  exports:[
    FormComponent,
    ShowComponent,
    IndexComponent
  ]
})
export class ClientesModule { }
