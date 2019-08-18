import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';


const routes: Routes = [
  {
    path: '',
    component: FaqPageComponent,
    pathMatch: 'prefix'
  }
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class FaqRoutingModule { }
