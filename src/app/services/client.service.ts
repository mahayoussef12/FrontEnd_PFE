import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {Client} from "../Client";
import {User} from "../User";

/*const baseUrl = 'http://localhost:8081/api/v1/client/ajouter';*/

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl = 'http://localhost:8082/api/v1/client/ajouter';
  apiURL = 'http://localhost:8082/api/v1/client';
  apiGett='http://localhost:8082/api/v1/clientEmail'
  apiDelete='http://localhost:8082/api/v1/client/delete'
  host :string = "http://localhost:8082/api/v1/Imgarticles";

  listData! : Client[];

  constructor(private http: HttpClient) {
  }

  /*  create(data: any): Observable<any> {
      return this.http.post(baseUrl, data);
    }*/
  create(formData: FormData): Observable<any> {
    return this.http.post<Client>(this.baseUrl,formData);
  }

  getClientById(cle: number): Observable<Client> {
    const url = `${this.apiURL}/${cle}`;
    return this.http.get<Client>(url);
    // return this.http.get(`${this.apiURL}/${cle}`)
  }
  getAllCliens(): Observable<Client[]>{
    return this.http.get<Client[]>(this.apiURL);

  }

  getAllEmail(email: string | undefined):Observable<Client>{

  const url = `${this.apiGett}/${email}`; return this.http.get<Client>(url); }
  updateClient(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.apiURL}/${id}`, value);
  }
  deleteClient(id: number | undefined) { const url = `${this.apiDelete}/${id}`; return this.http.delete(url); }
  testing(email: string | undefined):Observable<User>{
    const url = `${'http://localhost:8082/api/v1/user/maha'}/${email}`;
    return this.http.get<User>(url);
  }
  en(email: string | undefined):Observable<any>{
    const url = `${'http://localhost:8082/api/v1/user/entreprise'}/${email}`;
    return this.http.get<any>(url);}

  download(filename: string | undefined): Observable<HttpEvent<Blob>> {
    return this.http.get(`${'http://localhost:8082/api/v1/download'}/${filename}`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    });
  }
  test(email: string | undefined):Observable<any>{
    const url = `${'http://localhost:8082/api/v1/user/maaha'}/${email}`;
    return this.http.get<any>(url);}
  getAll(): Observable<any> {

    return this.http.get(`${'http://localhost:8082/api/v1/getAll'}`);
  }
  veriff(id:any,prod:any):Observable<any> {
    const url = `${'http://localhost:8082/api/v1/veriff'}/${id}`;
    return this.http.post<any>( url,prod);
  }
  renvoiCode(cle: number | null): Observable<any> {
    const urlr = `${this.baserRen}/${cle}`;
    return this.http.get<any>(urlr);
  }
  baserRen = 'http://localhost:8082/api/v1/renvoi';
}
