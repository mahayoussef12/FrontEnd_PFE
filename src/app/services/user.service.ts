import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {Observable} from "rxjs";
import {User} from "../User";




/*const baseUrl = 'http://localhost:8081/api/v1/client/ajouter';*/

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:8082/api/v1/user/ajouter';
  baseUrll = 'http://localhost:8082/api/v1/user/test';

  constructor(private http: HttpClient) {
  }

  createClient(prod: User): Observable<User> {
    return this.http.post<User>(this.baseUrll, prod);
  }
  create(prod: User): Observable<User> {
    return this.http.post<User>(this.baseUrll, prod);
  }
}
