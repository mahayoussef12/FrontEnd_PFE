import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdFacRoutingModule } from './ad-fac-routing.module';
import { AdFacComponent } from './ad-fac/ad-fac.component';
import {NgxPaginationModule} from "ngx-pagination";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AdFacComponent
  ],
  imports: [
    CommonModule,
    AdFacRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class AdFacModule { }
