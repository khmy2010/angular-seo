import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutletsComponent } from './pages/outlets/outlets.component';


const routes: Routes = [
  {
    path: '',
    component: OutletsComponent,
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OutletRoutingModule { }
