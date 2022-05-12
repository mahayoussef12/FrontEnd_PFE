import { Injectable } from '@angular/core';

import {Observable} from "rxjs";
import {Entreprise} from "../Entreprise";

import {rendez_vous} from "../rendez_vous";
import { coutType } from '../coutType';
import {code} from "../code";
import {HttpClient} from "@angular/common/http";





/*const baseUrl = 'http://localhost:8081/api/v1/client/ajouter';*/

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  baseUrl = 'http://localhost:8082/api/v1/entreprise/ajouter';
  apiURL = 'http://localhost:8082/api/v1/entreprise';
  apiGett = 'http://localhost:8082/api/v1/entrepriseEmail'
  apiURLL = 'http://localhost:8082/api/v1/clients';
  api = 'http://localhost:8082/api/v1/maha';
  apii = 'http://localhost:8082/api/v1/sum'
  maha = 'http://localhost:8082/api/v1/verif'
  count = 'http://localhost:8082/api/v1/count'
  cagt = 'http://localhost:8082/api/v1/entreprisecategorie'
  emplacement = 'http://localhost:8082/api/v1/entrepriseville'
  countville='http://localhost:8082/api/v1/countville'
  baseUrll = 'http://localhost:8082/api/v1/employees';
  apiDelete='http://localhost:8082/api/v1/entreprise/delete'
  constructor(private http: HttpClient) {
  }

  createEntreprise(prod: Entreprise): Observable<Entreprise> {
    return this.http.post<Entreprise>(this.baseUrl, prod);
  }

  getEntrepriseById(cle: number): Observable<Entreprise> {
    const url = `${this.apiURL}/${cle}`;
    return this.http.get<Entreprise>(url);
  }

  getAllEntreprise(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.apiURL);
  }

  getAllRdvEntreprise(cle: number): Observable<rendez_vous[]> {
    const url = `${this.apiURLL}/${cle}`;
    return this.http.get<rendez_vous[]>(url);
  }

  getAllRdvClient(cle: number): Observable<rendez_vous[]> {
    const url = `${this.api}/${cle}`;
    return this.http.get<rendez_vous[]>(url);
  }

  getAllEmail(email: string | undefined): Observable<Entreprise[]> {
    const url = `${this.apiGett}/${email}`;
    return this.http.get<Entreprise[]>(url);
  }

  getAllVille(categorie: string | undefined, ville: string | undefined): Observable<Entreprise[]> {
    const url = `${this.apiURL}/${categorie}/${ville}`;
    return this.http.get<Entreprise[]>(url);
  }

  testcount(id: number): Observable<any[]> {
    const url = `${this.apii}/${id}`;
    return this.http.get<any[]>(url)
  }

  verif(prod: code, cle: number): Observable<any> {

    return this.http.post<Entreprise>(`${this.maha}/${cle}`, prod);
  }

  CountGategorie(categorie: string): Observable<any> {
    const url = `${this.count}/${categorie}`;
    return this.http.get<any>(url)
  }

  Getcategorie(categorie: string): Observable<Entreprise[]> {
    const url = `${this.cagt}/${categorie}`;
    return this.http.get<Entreprise[]>(url)
  }

  Getville(ville: string): Observable<Entreprise[]> {
    const url = `${this.emplacement}/${ville}`;
    return this.http.get<Entreprise[]>(url)
  }

  Countville(ville: string): Observable<any> {
    const url = `${this.countville}/${ville}`;
    return this.http.get<any>(url)
  }
  updateEntreprise(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrll}/${id}`, value);
  }
  deleteEntreprise(id: number | undefined) { const url = `${this.apiDelete}/${id}`; return this.http.delete(url); }
}
