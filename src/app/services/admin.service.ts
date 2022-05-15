import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {admin} from "../admin";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = 'http://localhost:8082/api/v1/admin';

  constructor(private http: HttpClient) { }

  getall(): Observable<admin[]> {
    return this.http.get<admin[]>(this.baseUrl);
  }
}
