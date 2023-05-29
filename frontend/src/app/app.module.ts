import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FirsthomeComponent } from './firsthome/firsthome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCalendar, NgbDate, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HomepatientComponent } from './homepatient/homepatient.component';



// import du module MatDatepickerModule




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FirsthomeComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    HomepatientComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgbDatepickerModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
