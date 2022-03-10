import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component'
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'user',
        loadChildren: () => import('./log/log.module').then(m => m.LogModule)
      },
      {
        path: '',
        loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
      },
      {
        path:'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
