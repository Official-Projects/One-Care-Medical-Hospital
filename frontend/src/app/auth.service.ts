import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError, Subject, BehaviorSubject } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
// import jwt_decode from 'jwt-decode';
import * as JWT from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  baseUrl = "http://localhost:8000/user/login";
  subject = new Subject<any>();
  constructor(private http: HttpClient, private router: Router) {}

  login(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }
  isLoggedIn() {
    return localStorage.getItem("userInfo") != null;
  }
}
