import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {


  form: FormGroup;
  alertValidadorPwd: boolean = false;
  correoOk: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private globalService: GlobalService) {

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPwd: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  validar() {
    const registro = localStorage.getItem('Registro');
    const objR = JSON.parse(registro || '{}');
    console.log(objR)
    if (this.form.value.email == objR.email) {
      this.correoOk = true;
    }
  }
  cambiar(event: any) {
    event.preventDefault();
    if (!(this.form.value.password === this.form.value.confirmPwd)) {
      this.alertValidadorPwd = true;
    } else {
      this.alertValidadorPwd = false;
      Swal.fire('Cambiaste tu clave!',
        'Ahora inicia sesión!',
        'success')
      const user={
        email:this.form.value.email,
        password: this.form.value.password
      }
      const login = JSON.stringify(user);
      localStorage.setItem('Registro', login);
      console.log(localStorage.getItem('Registro'))
      this.router.navigateByUrl('/user/login');
    }

  }

}
