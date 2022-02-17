import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() deviceXs!: boolean;
  headersLoader: boolean = false;
  token: any;
  // slideBarVariable = [];
  adminName: string = '';
  // doctorName: string = '';
  // patientName: string = '';
  // appointmentName: string = '';
  bool: boolean = false;
  constructor(public authService: AuthService, private route: Router) {
    this.token = localStorage.getItem('userInfo')
      ? localStorage.getItem('userInfo')
      : null;
    console.log(this.token);
    this.authService.subject.subscribe((res) => {
      this.headersLoader = res;
      console.log(res);
    });
  }

  @Input() data: any;
  ngOnInit(): void {}
  // admin() {
  //   this.imageLoader = false;
  //   this.adminName = 'admin';
  //   this.bool = true;
  //   // this.slideBarVariable.push();
  // }
  // doctor() {
  //   this.imageLoader = false;
  //   this.adminName = 'doctor';
  //   this.bool = true;
  // }
  // appointment() {
  //   this.imageLoader = false;
  //   this.adminName = 'appointment';
  //   this.bool = true;
  // }
  // patient() {
  //   console.log('ajefiesgi');
  //   this.imageLoader = false;
  //   this.adminName = 'patient';
  //   this.bool = true;
  // }
  login() {
    // this.adminName = 'login';
    // this.imageLoader = false;
    // this.bool = true;
    if (this.authService.login(this.data)) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    // this.route.navigate(['/login']);
    localStorage.removeItem('userInfo');
    window.location.reload();
  }
  // signup() {
  //   this.adminName = 'signup';
  //   this.imageLoader = false;
  //   this.bool = true;
  // }
}
