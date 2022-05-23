import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendrierRoutingModule } from './calendrier-routing.module';
import {DayPilotModule} from "daypilot-pro-angular";
import {SchedulerModule} from "./scheduler/scheduler.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalendrierRoutingModule,
  ]
})
export class CalendrierModule { }
