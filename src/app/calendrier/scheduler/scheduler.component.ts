import {Component, ViewChild, AfterViewInit, ChangeDetectorRef} from "@angular/core";
import {
  DayPilot,
  DayPilotCalendarComponent,
  DayPilotNavigatorComponent,
  DayPilotSchedulerComponent
} from "daypilot-pro-angular";
import {DataService, EventCreateParams, EventDeleteParams} from "./data.service";
import EventData = DayPilot.EventData;
import SchedulerConfig = DayPilot.SchedulerConfig;
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../../services/client.service";

@Component({
  selector: 'scheduler-component',
  template: `
    <div class="container">
      <div class="navigator">
        <daypilot-navigator [config]="configNavigator" [events]="events" #navigator></daypilot-navigator>
      </div>
      <div class="content">
        <daypilot-calendar [config]="configCalendar" [events]="events" #calendar min="2022-05-26T14:30"></daypilot-calendar>
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
export class SchedulerComponent implements AfterViewInit {
  [x: string]: any;
  @ViewChild("calendar") calendar!: DayPilotCalendarComponent;
  @ViewChild("navigator") nav!: DayPilotNavigatorComponent;
  scheduler!: DayPilotSchedulerComponent;
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
      this.configCalendar.startDate = args.start;
      this.configCalendar.days = args.days;
    },
  };

  configCalendar: DayPilot.CalendarConfig = {
    viewType: "Days",

    onEventDelete: args => {
      let params: EventDeleteParams = {
        id: args.e.id(),
      };
      this.ds.deleteEvent(params).subscribe(result => {
        this.scheduler.control.message("Event deleted");
      });

    },
  };
  private detailId: any;

  constructor(private ds: DataService,private route: ActivatedRoute,private clientservice:ClientService) {
  }

  async ngAfterViewInit(): Promise<void> {
    this.loadEvents();
  }

  loadEvents(): void {
    this.detailId = this.route.snapshot.params["id"]
    const from = this.nav.control.visibleStart();
    const to = this.nav.control.visibleEnd();
    this.ds.getEvents(this.detailId, from, to).subscribe( async result => {
      this.events = result;
    });
  }






}
