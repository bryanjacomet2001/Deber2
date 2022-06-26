import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PaginaClienteComponent } from './pagina-cliente/pagina-cliente.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { CRUDComponent } from './crud/crud.component';
import { AgregarClientesComponent } from './agregar-clientes/agregar-clientes.component';
import {MatTableModule} from '@angular/material/table';
import { EditarClientesComponent } from './editar-clientes/editar-clientes.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    PaginaInicialComponent,
    PaginaClienteComponent,
    MenuLoginComponent,
    ErrorMsgComponent,
    CRUDComponent,
    AgregarClientesComponent,
    EditarClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule, MatTableModule
  ],
  exports:[
  ], 
  entryComponents: [LoginComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
