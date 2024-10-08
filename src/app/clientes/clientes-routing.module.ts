import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {path: 'clientes', component: LayoutComponent, canActivate: [ AuthGuard ], children: [
    {path: 'form', component: FormComponent},
    {path: 'form/:id', component: FormComponent},
    {path: '', component: IndexComponent}  
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
