import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, Subject, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
// import jwt_decode from 'jwt-decode';
import * as JWT from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:8000/user/login';
  subject = new Subject<any>();
  constructor(private http: HttpClient, private router: Router) {}

  // private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  // private UserName    = new BehaviorSubject<string>(localStorage.getItem('email'));
  //   private UserRole    = new BehaviorSubject<string>(localStorage.getItem('userRole'));

  login(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }
  isLoggedIn() {
    return localStorage.getItem('userInfo') != null;
  }
  // checkLoginStatus(): boolean {
  //   var loginCookie = localStorage.getItem('loginStatus');
  //   if (loginCookie == '1') {
  //     if (
  //       localStorage.getItem('jwt') === null ||
  //       localStorage.getItem('jwt') === 'undefined'
  //     ) {
  //       return false;
  //     }
  //     const token = localStorage.getItem('jwt');
  //     const dec = JWT(token);
  //     if (dec === undefined) {
  //       return false;
  //     }
  //     // Get Current Date Time
  //     const date = new Date(0);

  //     // Convert EXp Time to UTC
  //     let tokenExpDate = date.setUTCSeconds(dec.exp);

  //     // If Value of Token time greter than

  //     if (tokenExpDate.valueOf() > new Date().valueOf()) {
  //       return true;
  //     }

  //     console.log('NEW DATE ' + new Date().valueOf());
  //     console.log('Token DATE ' + tokenExpDate.valueOf());

  //     return false;
  //   }
  //   return false;
  // }
  // get isLoggesIn() {
  //   return this.loginStatus.asObservable();
  // }
  // get currentUserName()
  // {
  //     return this.UserName.asObservable();
  // }
  // get currentUserRole()
  //   {
  //       return this.UserRole.asObservable();
  //   }
}
