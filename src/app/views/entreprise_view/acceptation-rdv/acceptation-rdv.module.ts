import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceptationRdvRoutingModule } from './acceptation-rdv-routing.module';
import { AcceptationRdvComponent } from './acceptation-rdv/acceptation-rdv.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AcceptationRdvComponent
  ],
  imports: [
    CommonModule,
    AcceptationRdvRoutingModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class AcceptationRdvModule { }
