import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {Observable} from "rxjs";
import {avis} from "../avis";

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  baseUrl='http://localhost:8082/api/v1/create'
  apiGett='http://localhost:8082/api/v1/countavis'
  api='http://localhost:8082/api/v1/aviss'
  constructor(private http: HttpClient) { }
  createAvis(id:any,prod:avis): Observable<avis> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.post<avis>(url,prod);
  }
  count(id:any | undefined):Observable<avis>{

    const url = `${this.apiGett}/${id}`; return this.http.get<avis>(url); }
  getEntrepriseId(id:any | undefined):Observable<avis[]>{
    const url = `${this.api}/${id}`; return this.http.get<avis[]>(url); }

  deleteAvis(id: number | undefined) { const url = `${'http://localhost:8082/api/v1/avis'}/${id}`; return this.http.delete(url); }
}
