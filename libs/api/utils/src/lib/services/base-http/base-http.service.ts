import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  constructor(protected http: HttpClient) { }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  post<T>(url: string, data: T): Observable<T> {
    return this.http.post<T>(url, data);
  }

  put<T>(url: string, data: T): Observable<T> {
    return this.http.put<T>(url, data);
  }
}
