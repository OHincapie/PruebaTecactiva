import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {GlobalService} from '../../services/global.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loginAlert: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private globalService: GlobalService
  ) { 
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    
    this.loginAlert=false;
  
  }

  ngOnInit(): void {
  }

  login(event: Event) {
    event.preventDefault();
    console.log(this.form.value);
    const login= JSON.stringify(this.form.value); 
    const registro= localStorage.getItem('Registro');
    console.log(JSON.parse(registro ||'{}'))
    if(login==registro){
      this.globalService.login=true;
      console.log(this.globalService.login)
      this.loginAlert=false;
      Swal.fire('Iniciaste sesión!',
    'Iniciaste sesión con exito!',
    'success')
      this.router.navigateByUrl('/');
    } else{
      this.loginAlert=true;
    }
  }

}
