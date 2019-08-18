import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule)
  },
  {
    path: 'outlets',
    loadChildren: () => import('./outlets/outlets.module').then(m => m.OutletsModule)
  },
  {
    path: 'home',
    redirectTo: '/'
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
