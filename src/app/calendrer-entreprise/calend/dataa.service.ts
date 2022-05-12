import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from 'rxjs';
import {DayPilot} from 'daypilot-pro-angular';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DataaService {

  constructor(private http: HttpClient) {
  }


  /*
    getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {
      return this.http.get(this.url + from.toString() + '&to=' + to.toString()) as Observable<any>;
    }
  */
  eventsEntreprise(cle: number, from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {
    const url = `${environment.url}/${cle}/${from}/${to}`;
    return this.http.get<any[]>(url);
  }
}
