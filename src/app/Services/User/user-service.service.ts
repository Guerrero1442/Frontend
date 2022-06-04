import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Usermodel } from 'src/app/Models/Usuariomodel/usermodel';

const baseUrl = 'http://localhost:8080/api/v1/Users';
const baseUrl2 = 'http://localhost:8080/api/v1/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<Usermodel[]> {
    return this.http.get<Usermodel[]>(baseUrl);
  }
  get(id: String): Observable<Usermodel> {
    return this.http.get<Usermodel>(`${baseUrl2}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: string, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
}
