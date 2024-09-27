import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TecnicaComponent } from './tecnica/tecnica.component';
import { ClientesModule } from './clientes/clientes.module';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { ClientesService } from './services/clientes.service';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosModule } from './usuarios/usuarios.module';

@NgModule({
  declarations: [
    AppComponent,
    TecnicaComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ClientesModule,
    HttpClientModule,
    TemplateModule,
    UsuariosModule
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
