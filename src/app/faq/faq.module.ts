import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { FaqRoutingModule } from './faq-routing.module';



@NgModule({
  declarations: [FaqPageComponent],
  imports: [
    CommonModule,
    FaqRoutingModule
  ]
})
export class FaqModule { }
