import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm, } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-menu-login',
  templateUrl: './menu-login.component.html',
  styleUrls: ['./menu-login.component.css']
})
export class MenuLoginComponent implements OnInit {
  
  usuario!:string;

  constructor(private readonly route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      this.route.queryParams.subscribe((params:Params) =>{
      this.usuario = params['usuario'];
    });
  }

  exit(){
    this.router.navigate(['/home']);
  }

}
