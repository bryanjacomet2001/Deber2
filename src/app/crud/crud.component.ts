import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { AgregarClientesComponent } from '../agregar-clientes/agregar-clientes.component';
import { EditarClientesComponent } from '../editar-clientes/editar-clientes.component';
import { ClienteInterface } from '../Interfaces/ClienteInterface';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['cedula','nombres', 'apellidos','direccion','edad','opciones'];
  pos: number = 0;

  data = [{
        cedula: '0151245245',      
        nombres: 'Andrés Luis',
        apellidos: 'Carvajal Lozano',
        direccion: 'Quito, Ecuador',
        edad: 50
      },
      {
        cedula: '0954658913',      
        nombres: 'Jorge Luis',
        apellidos: 'Charco Aguirre',
        direccion: 'Guayaquil, Ecuador',
        edad: 36
      },
      {
        cedula: '0957962158',      
        nombres: 'Andrea Lisbeth',
        apellidos: 'Romero Haro',
        direccion: 'Guayaquil, Ecuador',
        edad: 45
      }
    ];
  
  nuevoCliente:any;
  nav: any;
  flag: Boolean = false;

  constructor(private router: Router, private dialog:MatDialog, private dialogEdit:MatDialog) { 

    this.nav = this.router.getCurrentNavigation();
    this.nuevoCliente = this.nav.extras.state;
 
  
    /*Cuando Agregamos un nuevo cliente*/
    if (this.nuevoCliente != null)
    {
        console.log(this.nuevoCliente.datosCliente.queryParams);
        this.data.push(this.nuevoCliente.datosCliente.queryParams);

    }
  }
  
  ngOnInit(): void {
   
    this.dataSource = new MatTableDataSource<ClienteInterface>(this.data as ClienteInterface[]);
    console.log(this.data);
  
  }

  openDialogAgregar(){
    this.dialog.open(AgregarClientesComponent, {
      width: '50%',
    })
  }

  obtenerUsuario(cedula:string){
    
    let usuario:any;
    let pos:number = 0;

    for (let i = 0; i < this.data.length; i++) {
      if(cedula === this.data[i].cedula){
        usuario = this.data[i];
        pos = i;
      }
    }
    this.dialog.open(EditarClientesComponent,{ width:'50%', data: {usuario, pos}});
  }
}
