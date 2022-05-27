import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdFacRoutingModule } from './ad-fac-routing.module';
import { AdFacComponent } from './ad-fac/ad-fac.component';


@NgModule({
  declarations: [
    AdFacComponent
  ],
  imports: [
    CommonModule,
    AdFacRoutingModule
  ]
})
export class AdFacModule { }
