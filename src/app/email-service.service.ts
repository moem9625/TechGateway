import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


import 'rxjs/add/operator/map'

import {Subject} from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable'


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
      firstName: this.formBuilder.control(null, Validators.required),
      lastName: this.formBuilder.control(null, Validators.required),
      email: this.formBuilder.control(null, Validators.required),
      tel: this.formBuilder.control(null, Validators.required),
      address: this.formBuilder.control(null, Validators.required),
      // address2: this.formBuilder.control(null, Validators.required),
      postCode: this.formBuilder.control(null, Validators.required),
      service: this.formBuilder.control(null, Validators.required),
      City: this.formBuilder.control(null, Validators.required),
      State: this.formBuilder.control(null, Validators.required),
      message1: this.formBuilder.control(null, Validators.required),


    });
  }
 

  public onSubmitForm(fullForm: string) {
  //  console.log(this.contactForm.value);
    this.formSubmitted = true;
    fullForm = JSON.stringify(this.contactForm.value);
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    let body = `fullForm=${fullForm}`;
    return this.http.post('http://us-central1-functions-84812.cloudfunctions.net/widgets/signup', body, { headers: headers }).subscribe(
      data => {
        alert('Message has been sent');
        
        // this.contactForm.reset();
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
