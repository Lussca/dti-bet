import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private apiUrl = 'http://18.119.10.42/DTIBet/app';

    constructor(private http: HttpClient) { }

    login<T>(data: any): Observable<T> {
        return this.http.post<T>(`${this.apiUrl}/rest/auth/login`, data);
    }

    register<T>(data: any): Observable<T> {
        return this.http.post<T>(`${this.apiUrl}/rest/auth/register`, data);
    }

    recover<T>(data: any): Observable<T> {
        return this.http.post<T>(`${this.apiUrl}/rest/auth/recover`, data);
    }
}