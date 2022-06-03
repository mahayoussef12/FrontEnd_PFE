import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {rendez_vous} from "../rendez_vous";
import {Observable} from "rxjs";
import {horaire} from "../horaire";

@Injectable({
  providedIn: 'root'
})
export class HoraireService {

  constructor(private http: HttpClient) {
  }

  ajouterhoraire(id: any, prod: horaire): Observable<horaire> {
    const url = `${'http://localhost:8082/api/v1/horaire/save'}/${id}`;
    return this.http.post<horaire>(url, prod);

  }
  gethoraie(id: any): Observable<horaire[]> {
    const url = `${'http://localhost:8082/api/v1/horaire'}/${id}`;
    return this.http.get<horaire[]>(url);}
}
