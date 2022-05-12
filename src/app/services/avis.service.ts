import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {Observable} from "rxjs";
import {avis} from "../avis";

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  baseUrl='http://localhost:8082/api/v1/avis'
  constructor(private http: HttpClient) { }
  create(prod:avis): Observable<avis> {
    return this.http.post<avis>(this.baseUrl, prod);
  }
}
