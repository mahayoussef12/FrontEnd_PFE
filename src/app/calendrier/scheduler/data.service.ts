import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DayPilot} from 'daypilot-pro-angular';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class DataService {

 /* resources: any[] = [
    { name: "Resource 1", id: "R1"},
    { name: "Resource 2", id: "R2"},
    { name: "Resource 3", id: "R3"},
    { name: "Resource 4", id: "R4"},
    { name: "Resource 5", id: "R5"},
    { name: "Resource 6", id: "R6"},
    { name: "Resource 7", id: "R7"},
    { name: "Resource 8", id: "R8"},
  ];
*/

  constructor(private http: HttpClient) {
  }


/*
  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {
    return this.http.get(this.url + from.toString() + '&to=' + to.toString()) as Observable<any>;
  }
*/
  getEvents(cle:number,from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {
    const url=`${environment.test}/${cle}/${from}/${to}`;
    return this.http.get<any[]>(url);
  }

 /* createEvent(data: EventCreateParams): Observable<EventData> {
    return this.http.post<EventCreateParams>(environment.api, data) as Observable<any>;
  }*/




}
export interface EventCreateParams {
  start: string;
  end: string;
  text: string;
  resource: string | number;
}

export interface EventMoveParams {
  id: string | number;
  start: string;
  end: string;
  resource: string | number;
}

export interface EventDeleteParams {
  id: string | number;
}

export interface EventData {
  id: string | number;
  start: string;
  end: string;
  text: string;
  resource: string | number;
}

