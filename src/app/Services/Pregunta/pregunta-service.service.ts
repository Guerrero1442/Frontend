import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Preguntamodel } from 'src/app/Models/Preguntamodel/preguntamodel';


const baseUrl = 'http://localhost:8080/api/v1/Questions';
const baseUrl2 = 'http://localhost:8080/api/v1/Question';

@Injectable({
  providedIn: 'root'
})
export class PreguntaServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Preguntamodel[]> {
    return this.http.get<Preguntamodel[]>(baseUrl);
  }
  get(id: String): Observable<Preguntamodel> {
    return this.http.get<Preguntamodel>(`${baseUrl2}/${id}`);
  }
  create(data: any): Observable<any> {
    console.log(data);
    return this.http.post(baseUrl, data);

  }
  update(id: string, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

}
