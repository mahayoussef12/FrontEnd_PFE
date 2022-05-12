import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import {DataService, EventCreateParams} from "../../calendrier/scheduler/data.service";
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../../services/client.service";
import {DataaService} from "./dataa.service";
import {DayPilot, DayPilotCalendarComponent, DayPilotNavigatorComponent} from "daypilot-pro-angular";

@Component({
  selector: 'app-calend',
  template: `
    <div class="container">
      <div class="navigator">
        <daypilot-navigator [config]="configNavigator" [events]="events" #navigator></daypilot-navigator>
      </div>
      <div class="content">
        <daypilot-calendar [config]="configCalendar" [events]="events" #calendar></daypilot-calendar>
      </div>
    </div>

  `,
  styles: [`
    .container {
      display: flex;
      flex-direction: row;

    }

    .navigator {
      margin-right: 10px;
    }

    .content {
      flex-grow: 1;
    }
  `]
})
export class CalendComponent implements AfterViewInit{

  @ViewChild("calendar") calendar!: DayPilotCalendarComponent;
  @ViewChild("navigator") nav!: DayPilotNavigatorComponent;

  events: DayPilot.EventData[] = [];

  configNavigator: DayPilot.NavigatorConfig = {
    showMonths: 3,
    cellWidth: 22,
    cellHeight: 22,
    selectMode: "Week",
    freeHandSelectionEnabled: true,
    onVisibleRangeChanged: args => {
      this.loadEvents();
    },
    onTimeRangeSelected: args => {
      this.configCalendar.viewType = "Days";
      this.configCalendar.startDate =args.start
      this.configCalendar.days = args.days;
    }
  };

  configCalendar: DayPilot.CalendarConfig = {
    viewType: "Days",
  };
  private detailId: any;

  constructor(private ds: DataaService,private route: ActivatedRoute,private clientservice:ClientService) {
  }

  ngAfterViewInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.detailId = this.route.snapshot.params["id"]
    const from = this.nav.control.visibleStart();
    const to = this.nav.control.visibleEnd();
    this.ds.eventsEntreprise(this.detailId,from, to).subscribe(result => {
      this.events = result;
    });
  }

}
