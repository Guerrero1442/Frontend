import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exammodel } from 'src/app/Models/Exammodel/exammodel';

const baseUrl = 'http://localhost:8080/api/v1/Exams';
const baseUrl2 = 'http://localhost:8080/api/v1/Exam';

@Injectable({
  providedIn: 'root'
})
export class ExamServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Exammodel[]> {
    return this.http.get<Exammodel[]>(baseUrl);
  }
  get(id: String): Observable<Exammodel> {
    return this.http.get<Exammodel>(`${baseUrl2}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  
}
