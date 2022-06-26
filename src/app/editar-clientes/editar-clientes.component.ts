import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css']
})
export class EditarClientesComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<EditarClientesComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { 
  }


  usuarioEdit = new FormGroup({
    cedula: new FormControl(this.data.usuario.cedula,Validators.required),
    nombres: new FormControl(this.data.usuario.nombres,Validators.required),
    apellidos: new FormControl(this.data.usuario.apellidos, Validators.required),
    direccion: new FormControl(this.data.usuario.direccion, Validators.required),
    edad: new FormControl(this.data.usuario.edad, Validators.required)
  })

  ngOnInit(): void {
  }

  onSubmitEdit()
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        cedula: this.usuarioEdit.value.cedula,
        nombres: this.usuarioEdit.value.nombres,
        apellidos: this.usuarioEdit.value.apellidos,
        direccion: this.usuarioEdit.value.direccion,
        edad: this.usuarioEdit.value.edad
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    this.redirectTo('/admin', objToSend);

  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: {obtCliente: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }

}
