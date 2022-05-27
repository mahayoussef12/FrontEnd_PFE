import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from '../Facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  apiURL = 'http://localhost:8082/api/v1/facture';
  api='http://localhost:8082/api/v1/test'
  appi='http://localhost:8082/api/v1/testing'
  app='http://localhost:8082/api/v1/numbertolettre';
  ap="http://localhost:8082/api/v1/tva";
  constructor(private http: HttpClient) { }
  getfacById(cle: number): Observable<Facture> {
    const url = `${this.apiURL}/${cle}`;
    return this.http.get<Facture>(url);

  }
  getFacByNum(cle:number):Observable<Facture[]>{
  const url = `${this.api}/${cle}`;
  return this.http.get<Facture[]>(url);}
  getFacByclient(cle:number):Observable<Facture[]>{
    const url = `${this.appi}/${cle}`;
    return this.http.get<Facture[]>(url);}
  lettre(cle:number):Observable<any>
  {
    const app = `${this.app}/${cle}`;
    return this.http.get<any>(app,{ responseType: 'text' as 'json'});
  }
  tva(cle:number):Observable<any>
  {
    const ap = `${this.ap}/${cle}`;
    return this.http.get<any>(ap);
  }
  getAllFacture(): Observable<Facture[]> {
    return this.http.get<Facture[]>('http://localhost:8082/api/v1/factures');
  }
}
