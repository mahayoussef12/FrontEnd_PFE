import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Entreprise} from "../Entreprise";
import {rendez_vous} from "../rendez_vous";



@Injectable({
  providedIn: 'root'
})
export class Rendez_vousService {

  apiDelete = 'http://localhost:8082/api/v1/RDV/delete';
  apiURL='http://localhost:8082/notification/token';

  constructor(private http: HttpClient) {
  }

  deleteRDV(id: number | undefined) { const url = `${this.apiDelete}/${id}`; return this.http.delete(url); }
  sendTokenNotification():Observable<any>{
      return this.http.get<any>(this.apiURL);
    }
  }


