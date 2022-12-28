import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ObjetivoComponent } from './objetivo/objetivo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { ArticulosComponent } from './articulos/articulos.component';



const routes: Routes = [
    { path: 'principal', component: PrincipalComponent },
    { path: 'objetivo', component: ObjetivoComponent},
    { path: 'contacto', component: ContactoComponent },
    { path: 'preg-frecuentes', component: PreguntasComponent },
    { path: 'articulos', component: ArticulosComponent },

    
  
    { path: '**', pathMatch: 'full', redirectTo: 'principal'}
    // { path: '**', component: PageNotFoundComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  