import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
    {path: 'clientes/form', component: FormComponent},
    {path: 'clientes', component: IndexComponent}  
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
