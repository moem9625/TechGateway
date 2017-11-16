import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


import 'rxjs/add/operator/map'

import {Observable, Subject} from 'rxjs/Rx';


@Injectable()
export class EmailServiceService {
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();

  constructor(private http: Http, public formBuilder: FormBuilder) { 
    this.myMethod$ = this.myMethodSubject.asObservable();
  }
  contactForm: FormGroup;
  formSubmitted: boolean = false;

  buildForm() {
    this.contactForm = this.formBuilder.group({
      userFirstName: this.formBuilder.control(null, Validators.required),
      userLastName: this.formBuilder.control(null, Validators.required)
    });
  }

  public onSubmitForm() {
    var firstName= "Mohammed";
    var lastName = "Mahmoud"
    var email = "jahmoud1989@yahoo.com"
    var telPhone = "7086701535";
    var add1 = "20808 N. 27Th Ave";
    var add2 = "apt 1162";
    var city = "Phoenix";
    var state = "AZ";
    var posCode = "85027";
    var serv = "cameras";
    var mess = "I would Like cameras installed";
   
   console.log(this.contactForm.value);
    this.formSubmitted = true;
    // this.contactForm.reset();
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    let body = `firstName=${firstName}&lastName=${lastName}&email=${email}&telPhone=${telPhone}&add1=${add1}&add2=${add2}&city=${city}
    &state=${state}&posCode=${posCode}&serv=${serv}&mess=${mess}`;
    return this.http.post('http://localhost:3000/signup', body, { headers: headers }).subscribe(
      data => {
        alert('ok');
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }
    )
    // this.http.get('http://localhost:3000/signup', this.contactForm.value);
    
  }

  public VerifyEmail() {
    var emailid = "test";
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = JSON.stringify({emailid: emailid});
    // return this.http.post('http://localhost:8000', data, options).map(res => res.json().subscribe());
}
myMethod(data) {
  console.log(data); // I have data! Let's return it so subscribers can use it!
  // we can do stuff with data if we want
  this.myMethodSubject.next(data);
}

}
