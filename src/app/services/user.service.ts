import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {Observable} from "rxjs";
import {User} from "../User";
import {avis} from "../avis";




/*const baseUrl = 'http://localhost:8081/api/v1/client/ajouter';*/

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:8082/api/v1/user/create';
  baseUrll = 'http://localhost:8082/api/v1/user/test';

  constructor(private http: HttpClient) {
  }

  createClient(id:any,prod:User): Observable<User> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.post<User>(url,prod);

  }
  create(id:any,prod:User): Observable<User> {
    const url = `${this.baseUrll}/${id}`;
    return this.http.post<User>(url,prod);
  }
}
