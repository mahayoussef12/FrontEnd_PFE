import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { DashbordComponent } from './dashbord.component';
import {NgChartsModule} from "ng2-charts";


@NgModule({
  declarations: [
    DashbordComponent
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    NgChartsModule
  ]
})
export class DashbordModule { }
