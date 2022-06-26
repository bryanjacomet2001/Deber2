import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm, } from '@angular/forms';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ErrorMsgComponent } from '../error-msg/error-msg.component';
  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>, private dialog: MatDialog) {}

  //Datos quemados
  user="root";
  password = "1234";
  
  usuarioLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })

  ngOnInit(): void {}
  
  onSubmit(){
    //console.log(this.usuarioLogin.value);
    if(this.usuarioLogin.value.usuario === this.user && this.usuarioLogin.value.password === this.password){
      this.router.navigate(['/usuario'], {queryParams: {usuario: this.usuarioLogin.value.usuario}});
      this.dialogRef.close();
    }
    else if(this.usuarioLogin.value.usuario === 'admin' && this.usuarioLogin.value.password === '1234')
    {
      this.router.navigate(['/admin'], {queryParams: {usuario: this.usuarioLogin.value.usuario}});
      this.dialogRef.close();
    }
    else
    {
      this.dialog.open(ErrorMsgComponent);
    }
  }
}
