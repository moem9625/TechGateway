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
    var username= "Mohammed";
    var password = "dafads"
    var data = JSON.stringify({username: "Mahmoud", password: "ajflkjlkjMOhamma"});
    // var body = "firstname=" + user.firstname + "&lastname=" + user.lastname + "&username=" + user.username + "&email=" + user.email + "&password=" + user.password;
    
    // let urlSearchParams = new URLSearchParams();
    // urlSearchParams.append('username', username);
    // urlSearchParams.append('password', password);
    // let body = urlSearchParams.toString()
   console.log(this.contactForm.value);
    this.formSubmitted = true;
    // this.contactForm.reset();
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    let body = `username=${username}&password=${password}`;
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
