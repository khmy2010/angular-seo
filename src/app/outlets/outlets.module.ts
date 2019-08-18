import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletsComponent } from './pages/outlets/outlets.component';
import { OutletRoutingModule } from './outlets-routing.module';



@NgModule({
  declarations: [OutletsComponent],
  imports: [
    CommonModule,
    OutletRoutingModule
  ]
})
export class OutletsModule { }
