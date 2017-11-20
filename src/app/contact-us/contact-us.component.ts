import { Component, OnInit } from '@angular/core';
import { EmailServiceService } from '../email-service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers: [EmailServiceService]
})
export class ContactUsComponent implements OnInit {

  constructor(public emailservice: EmailServiceService) { }

  ngOnInit() {
  }

}
