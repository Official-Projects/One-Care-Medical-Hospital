import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  appointForm!: FormGroup;
  AppointmentType!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.AppointmentType = fb.group({
      Cervixcheckup: false,
      Heartcheckup: false,
      Eyecheckup: false,
      HearingTest: false,
    });
  }

  ngOnInit(): void {
    this.appointForm = new FormGroup({
      name: new FormControl(null, [Validators.email, Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.min(6),
        Validators.max(10),
      ]),
      contact: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      appointmentType: new FormControl(null, [Validators.required]),
    });
  }
  book() {
    console.log('You have booked appointment');
    console.log(this.appointForm.value);
    this.appointForm.reset();
  }
  get name() {
    return this.appointForm.get('name');
  }
  get email() {
    return this.appointForm.get('email');
  }
  get contact() {
    return this.appointForm.get('contact');
  }
  get age() {
    return this.appointForm.get('age');
  }
  get address() {
    return this.appointForm.get('address');
  }
  get appointmentType() {
    return this.appointForm.get('appointmentType');
  }
}
