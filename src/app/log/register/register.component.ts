import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isLinear = false;
  form: FormGroup;
  formDatos: FormGroup;
  isOptional:boolean=false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.formDatos= formBuilder.group({
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      edad:['',[Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  login(event: Event) {
    event.preventDefault();
    console.log(this.form.value);
    localStorage.setItem('Registro',JSON.stringify(this.form.value) )
    // Swal.fire('Registrado!',
    // 'Te has registrado con exito!',
    // 'success')
    // this.router.navigateByUrl('/user/login')
  }

  datos(event: Event) {
    event.preventDefault();
    console.log(this.form.value);
    localStorage.setItem('Datos',JSON.stringify(this.form.value) )
    // Swal.fire('Registrado!',
    // 'Te has registrado con exito!',
    // 'success')
    // this.router.navigateByUrl('/user/login')
  }

 
}
