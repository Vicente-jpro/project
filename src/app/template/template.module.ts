import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    SideBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports:[
    NavbarComponent,
    SideBarComponent,
    FooterComponent
  ]
})
export class TemplateModule { }
