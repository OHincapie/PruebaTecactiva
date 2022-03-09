import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LogRoutingModule} from './log-routing.module';
import {MaterialModule} from './../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { PasswordComponent } from './password/password.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, PasswordComponent],
  imports: [
    CommonModule,
    LogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class LogModule { }
