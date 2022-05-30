import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { service } from '../servise';


@Injectable({
  providedIn: 'root'
})
export class ServiseService {
  baseserv = 'http://localhost:8082/api/v1/service';
  baseservsave = 'http://localhost:8082/api/v1/ajouter';
  basservEnte = 'http://localhost:8082/api/v1/servise/entreprise';
  constructor(private http: HttpClient) {
    
   }
   getAllService(): Observable<service[]> {
    return this.http.get<service[]>(this.baseserv);
  }
  createService(): Observable<service[]> {
    return this.http.get<service[]>(this.baseserv);
  }
  createServicereS(prod: service): Observable<service> {
    return this.http.post<service>(this.baseservsave, prod);
  }
  ajouterservice(id: any, prod:service): Observable<service> {
    const url = `${'http://localhost:8082/api/v1/service/save'}/${id}`;
    return this.http.post<service>(url, prod);

  }
 
  listService(id: any): Observable<service[]> {
    const urll = `${'http://localhost:8082/api/v1/servise/entreprise'}/${id}`;
    return this.http.get<service[]>(urll);
  }
}
