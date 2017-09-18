import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);
  
  favoriteSeason: string;
  
    seasons = [
      'Alarms',
      'Access Control',
      'Security Cameras',
      
    ];  
  
  constructor() { }

  ngOnInit() {
    var camera1 = "/assets/camera1.jpg";
    
  }

}
