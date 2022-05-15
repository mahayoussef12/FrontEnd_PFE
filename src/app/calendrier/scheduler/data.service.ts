import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DayPilot} from 'daypilot-pro-angular';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class DataService {


  constructor(private http: HttpClient) {
  }



  getEvents(cle:number,from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {
    const url=`${environment.test}/${cle}/${from}/${to}`;
    return this.http.get<any[]>(url);
  }

 /* createEvent(data: EventCreateParams): Observable<EventData> {
    return this.http.post<EventCreateParams>(environment.api, data) as Observable<any>;
  }*/


  deleteEvent(data: EventDeleteParams):Observable<EventData> {
    return this.http.post("/api/events/delete", data) as Observable<any>;
  }

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

