import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { EmailServiceService } from './email-service.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// import {MatListModule} from '@angular/material/list';





import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule}   from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicesTabComponent } from './services-tab/services-tab.component';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk/table';
const appRoutes:Routes= [
  { path: '', redirectTo: 'homePage', pathMatch: 'full' },
  {
    path: 'homePage',
    component: HomepageComponent

  },
  {
    path: 'aboutUs',
    component: AboutComponent
  },
  {
    path: 'services',
    component: ServicesTabComponent
  },
  {
    path: 'contactUs',
    component: ContactUsComponent
  },
  { path: '**', redirectTo: '' }
]
@NgModule({
 
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    AboutComponent,
    ContactUsComponent,
    GalleryComponent,
    ServicesTabComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule, 
    CdkTableModule,
    MatInputModule,
    MatCardModule, 
    MatMenuModule, 
    MatInputModule,
    MatToolbarModule, 
    MatListModule,
    MatIconModule,
    HttpModule,
    MatRadioModule,
    RouterModule.forRoot(appRoutes),
   
  ],
  providers: [EmailServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
