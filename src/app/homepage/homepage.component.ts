import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { EmailServiceService } from '../email-service.service';





@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [EmailServiceService]
})
export class HomepageComponent implements OnInit {
  firstName: string;
  lastName: string;
  tel: string;
  address: string;
  address2: string;
  postCode: string;
  favoriteSeason: string;
  message: string;
 
  sendValues(): void {
  console.log(this.firstName + " " + this.lastName + " telphone " + this.tel + " address " + this.address + "address2 " + 
this.address2 + " postal Code " + this.postCode + " " + this.favoriteSeason + " message " + this.message);

 
    this.emailservice.onSubmitForm();
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
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer, 
   private emailservice: EmailServiceService){ 
    iconRegistry.addSvgIcon(
    'thumbs-up',
    sanitizer.bypassSecurityTrustResourceUrl('assets/credit-card.svg'));
    // emailservice.VerifyEmail();
    emailservice.buildForm();
  }
  function(chosenCity: string) {
    console.log(chosenCity);
  }

  ngOnInit() {
    var camera1 = "/assets/camera1.jpg";
    
  }
  

}
