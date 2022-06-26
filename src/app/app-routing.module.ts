import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaginaInicialComponent} from './pagina-inicial/pagina-inicial.component';
import { PaginaClienteComponent } from './pagina-cliente/pagina-cliente.component';
import { CRUDComponent } from './crud/crud.component';
import { EditarClientesComponent } from './editar-clientes/editar-clientes.component';

const routes: Routes = [
  {path:'', component:PaginaInicialComponent},
  {path:'home', component:PaginaInicialComponent},
  {path:'usuario', component:PaginaClienteComponent},
  {path:'admin', component:CRUDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
