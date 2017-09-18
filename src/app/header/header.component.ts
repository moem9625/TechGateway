import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  
  constructor(private router:Router) { }
  myEvent(event){
    console.log(event);
    // this.router.navigate([event]);
    // this.router.navigate(['/aboutUs']);
  }
  // currentOrientation = 'horizontal';
  currentJustify = 'fill';
  

  ngOnInit() {
    
  }

}
