import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceenRoutingModule } from './serviceen-routing.module';
import { ServiceenComponent } from './serviceen/serviceen.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ServiceenComponent
  ],
  imports: [
    CommonModule,
    ServiceenRoutingModule,
    FormsModule
  ]
})
export class ServiceenModule { }
