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
import { SidenavComponent } from './sidenav/sidenav.component';
import { MediFolderComponent } from './medi-folder/medi-folder.component';
import { NavbarSecondComponent } from './navbar-second/navbar-second.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HomepatientComponent } from './homepatient/homepatient.component';
import { ScheduleModule, RecurrenceEditorModule ,DayService, WorkWeekService,WeekService, MonthService,MonthAgendaService} from '@syncfusion/ej2-angular-schedule';

import { DashbordComponent } from './dashbord/dashbord.component';
import { DocumentPatientComponent } from './document-patient/document-patient.component';
import { FavorisComponent } from './favoris/favoris.component';
import { HistoryPatientComponent } from './history-patient/history-patient.component';
import { NotificationPatientComponent } from './notification-patient/notification-patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';



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
    SidenavComponent,
    MediFolderComponent,
    NavbarSecondComponent,
    DashbordComponent,
    DocumentPatientComponent,
    FavorisComponent,
    HistoryPatientComponent,
    NotificationPatientComponent,
    PatientListComponent,
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
    ScheduleModule, RecurrenceEditorModule,
    
    

  ],
  providers: [DayService, WorkWeekService,WeekService, MonthService,MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}