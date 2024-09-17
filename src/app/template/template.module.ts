import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    SideBarComponent
  ]
})
export class TemplateModule { }
