import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Entreprise} from "../Entreprise";
import {rendez_vous} from "../rendez_vous";
import {avis} from "../avis";



@Injectable({
  providedIn: 'root'
})
export class Rendez_vousService {

  apiDelete = 'http://localhost:8082/api/v1/RDV/delete';
 baseUrl='http://localhost:8082/api/v1/RDV/ajouter';

  appi='http://localhost:8082/api/v1/client/date';
  appdef='http://localhost:8082/api/v1/def';

  appclientRDV='http://localhost:8082/api/v1/client/client';

  constructor(private http: HttpClient) {
  }
  createRDV(id:any,prod:rendez_vous): Observable<rendez_vous> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.post<rendez_vous>(url,prod);
  }
  deleteRDV(id: number | undefined) { const url = `${this.apiDelete}/${id}`; return this.http.delete(url); }
  getRdvDate(cle:number):Observable<Date[]>{
    const url = `${this.appi}/${cle}`;
    return this.http.get<Date[]>(url);}

  getRdvclient(cle:number):Observable<String[]>{
    const url = `${this.appclientRDV}/${cle}`;
    return this.http.get<String[]>(url);}

  def(cle:number):Observable<number[]>{
    const url = `${this.appdef}/${cle}`;
    return this.http.get<number[]>(url);}
  }


