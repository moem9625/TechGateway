import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { EmailServiceService } from '../email-service.service';
// import {MatSnackBar} from '@angular/material';
// import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';





@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [EmailServiceService]
})
export class HomepageComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
  address: string;
  address2: string;
  postCode: string;
  favoriteSeason: string;
  message1: string;
  fullForm: string;

  
 
  sendValues(): void {
  var fullForm;
  fullForm = "First Name: " + this.firstName +  " lastName: " + this.lastName + " \ntelphone: " + this.tel + " \naddress: " + this.address + " \naddress2: " + 
this.address2 + " \npostal Code: " + this.postCode + " \n" + this.favoriteSeason + " \nmessage: " + this.message1 + " \nemail " + this.email;

 
    this.emailservice.onSubmitForm(fullForm);
    this.buildForm();
    this.formSubmitted = true;
    this.contactForm.reset();
  }


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);
  
  
  
  postalCode: string;
  
    seasons = [
      'Alarms',
      'Access Control',
      'Security Cameras',
      'Point of Sales(POS)'
      
    ];  
  constructor(private router:Router, 
    public formBuilder: FormBuilder,
    iconRegistry: MatIconRegistry,
    
    sanitizer: DomSanitizer, 
   private emailservice: EmailServiceService){ 
    iconRegistry.addSvgIcon(
    'thumbs-up',sanitizer.bypassSecurityTrustResourceUrl('assets/credit-card.svg'));
    // emailservice.VerifyEmail();
    emailservice.buildForm();
   
  }
  contactForm: FormGroup;
  formSubmitted: boolean = false;
  

  buildForm() {
    this.contactForm = this.formBuilder.group({
      firstName: this.formBuilder.control(null, Validators.required),
      userLastName: this.formBuilder.control(null, Validators.required)
    });
  }
  function(chosenCity: string) {
    console.log(chosenCity);
  }

  ngOnInit() {
    var camera1 = "/assets/camera1.jpg";
    
  }
  // openSnackBar(message: string, action: string) {
  //   this.snackBar.open("Email Sent", action, {
  //     duration: 2000,
  //   });
  // }
  

}
