import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scoremodel } from 'src/app/Models/Scoremodel/scoremodel';


const baseUrl = 'http://localhost:8080/api/v1/Scores';
const baseUrl2 = 'http://localhost:8080/api/v1/Score';

@Injectable({
  providedIn: 'root'
})
export class ScoreServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Scoremodel[]> {
    return this.http.get<Scoremodel[]>(baseUrl);
  }
  get(id: String): Observable<Scoremodel> {
    return this.http.get<Scoremodel>(`${baseUrl2}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
