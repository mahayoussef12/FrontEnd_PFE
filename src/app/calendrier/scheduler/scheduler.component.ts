import {Component, ViewChild, AfterViewInit, ChangeDetectorRef} from "@angular/core";
import {
  DayPilot,
  DayPilotCalendarComponent,
  DayPilotNavigatorComponent,
  DayPilotSchedulerComponent
} from "daypilot-pro-angular";
import {DataService, EventCreateParams} from "./data.service";
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
export class SchedulerComponent implements AfterViewInit {
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
      this.configCalendar.startDate = args.start;
      this.configCalendar.days = args.days;
    }
  };

  configCalendar: DayPilot.CalendarConfig = {
    viewType: "Days",
/*    onTimeRangeSelected: async (args) => {
      const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
      const dp = args.control;
      dp.clearSelection();
      if (!modal.result) {
        return;
      }
      const params: EventCreateParams = {
        start: args.start.toString(),
        end: args.end.toString(),
        text: modal.result,
        resource: args.resource
      };
    },*/

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


  /*@ViewChild("scheduler")
  scheduler!: DayPilotSchedulerComponent;

  readonly: boolean = false;

  events: EventData[] = [];

  config: SchedulerConfig = {
    timeHeaders : [
      {groupBy: "Month", format: "MMMM yyyy"},
      {groupBy: "Day", format: "d"}
    ],
    eventHeight: 40,
    scale: "Day",
    days: 30,
    startDate: "2022-06-01",
    eventDeleteHandling: "Update",
    contextMenu: new DayPilot.Menu({
      items: [
        { text: "Edit" },
        { text: "Details" }
        ],
      onShow: args => {
        // @ts-ignore
        args.menu.items[0].disabled = this.readonly;
      }
    }),
    onTimeRangeSelected: async (args) => {
      const dp = args.control;
      const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
      dp.clearSelection();
      if (modal.canceled) { return; }
      const params: EventCreateParams = {
        start: args.start.toString(),
        end: args.end.toString(),
        text: modal.result,
        resource: args.resource
      };
      this.ds.createEvent(params).subscribe(result => {
        this.events.push(result);
        this.scheduler.control.message('Event created');
      } );
    },
    onBeforeRowHeaderRender: args => {
      if (!this.readonly) {
        args.row.areas = [
          { right: 3, top: 13, width: 14, height: 14, style: "color: #aaa", cssClass: "icon icon-edit", visibility: "Hover", onClick: args => { this.scheduler.control.rows.edit(args.source); } }
        ];
      }
    },
    onEventClick: args => {
      DayPilot.Modal.prompt("Event name:", args.e.data.text).then(modal => {
        if (modal.canceled) {
          return;
        }
        args.e.data.text = modal.result;
        this.scheduler.control.events.update(args.e);
      });
    }
  };

  constructor(private ds: DataService, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.ds.getResources().subscribe(result => this.config.resources = result);

    var from = this.scheduler.control.visibleStart();
    var to = this.scheduler.control.visibleEnd();
    this.ds.getEvents(from, to).subscribe(result => {
      this.events = result;
    });
  }

  original: any;

  changed():void {
    let properties = [
      "eventClickHandling",
      "eventDeleteHandling",
      "eventHoverHandling",
      "eventDoubleClickHandling",
      //"eventEditHandling",
      "eventMoveHandling",
      "eventResizeHandling",
      //"eventSelectHandling",
      "rowClickHandling",
      "rowDoubleClickHandling",
      "rowCreateHandling",
      //"rowEditHandling",
      "rowSelectedHandling",
      "rowMoveHandling",
      "timeRangeClickHandling",
      "timeRangeDoubleClickHandling",
      "timeRangeSelectedHandling",
      "timeRangeRightClickHandling"
    ];

    if (this.readonly) {
      this.original = {};

      properties.forEach(name => {
        // @ts-ignore
        this.original[name] = this.scheduler.control[name];
        // @ts-ignore
        this.config[name] = "Disabled";
      });

      this.scheduler.control.clearSelection();

    }
    else {
      properties.forEach(name => {
        // @ts-ignore
        this.config[name] = this.original[name];
      });
    }
  }*!/

}

*/

}
