import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiBase = 'https://randomuser.me';

  constructor(private http: HttpClient) { }

  getItem(offset: number, pageNum: number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.apiBase + `/api/?results=${offset}&page=${pageNum}`, {
      headers: headers
    });
  }
}
