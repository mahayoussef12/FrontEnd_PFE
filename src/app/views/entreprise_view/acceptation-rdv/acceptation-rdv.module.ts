import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceptationRdvRoutingModule } from './acceptation-rdv-routing.module';
import { AcceptationRdvComponent } from './acceptation-rdv/acceptation-rdv.component';


@NgModule({
  declarations: [
    AcceptationRdvComponent
  ],
  imports: [
    CommonModule,
    AcceptationRdvRoutingModule
  ]
})
export class AcceptationRdvModule { }
