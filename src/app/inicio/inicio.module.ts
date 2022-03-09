import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import {InicioRoutingModule} from './inicio-routing.module';
import {MaterialModule} from '../material/material.module';
import {YouTubePlayerModule} from '@angular/youtube-player';


@NgModule({
  declarations: [
    InicioComponent,
    
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MaterialModule,
    YouTubePlayerModule
  ]
})
export class InicioModule { }
