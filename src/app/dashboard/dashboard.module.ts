import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../material/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxChartsModule,
    MaterialModule,
    RouterModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
