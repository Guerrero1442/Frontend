import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:8080/api/v1/Questions';
const baseUrl2 = 'http://localhost:8080/api/v1/Question';

@Injectable({
  providedIn: 'root'
})
export class PreguntaServiceService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id: String){
    return this.http.get(`${baseUrl2}/${id}`);
  }

  create(data: any) {
    console.log(data);
    return this.http.post(baseUrl, data);
  }

  update(id: string, data: any) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  getbyautor(autor:String){
    return this.http.get(`${baseUrl}/${autor}`);
  }
  delete(id: string){
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
