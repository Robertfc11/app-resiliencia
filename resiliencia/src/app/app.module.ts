import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ObjetivoComponent } from './objetivo/objetivo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { ArticulosComponent } from './articulos/articulos.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NavbarComponent,
    ObjetivoComponent,
    ContactoComponent,
    PreguntasComponent,
    ArticulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
