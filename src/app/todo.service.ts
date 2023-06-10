import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUrl = 'http://localhost:3000/api/record';

  constructor(private http: HttpClient) {}

  getRecords(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  addRecord(record: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, record);
  }

  updateRecord(id: string, record: Todo): Observable<Todo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Todo>(url, record);
  }

  deleteRecord(recordId: string): Observable<any> {
    const url = `${this.apiUrl}/${recordId}`;
    return this.http.delete(url);
  }
}
