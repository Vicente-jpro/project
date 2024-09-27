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
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
