import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirsthomeComponent } from './firsthome/firsthome.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';

import { HomepatientComponent } from './homepatient/homepatient.component';


import { MediFolderComponent } from './medi-folder/medi-folder.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { MediTestComponent } from './medi-test/medi-test.component';
import { HistoryPatientComponent } from './history-patient/history-patient.component';
import { FavorisComponent } from './favoris/favoris.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { NotificationPatientComponent } from './notification-patient/notification-patient.component';
import { DocumentPatientComponent } from './document-patient/document-patient.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '', component: FirsthomeComponent
  },
  {
    path: 'test', component: TestComponent
  },
  {

    path: 'loginpatient', component: LoginComponent
  },
  {
    path: 'signupatient', component: SignupComponent
  },
  {
    path: 'contact', component: NavbarComponent
  },
  {
    path: "homepatient", component: HomepatientComponent
  }
  ,
  { path: 'mediFolder', component: MediFolderComponent },
  { path: 'dashbord', component: DashbordComponent },
  { path: 'mediTest', component: MediTestComponent },
  { path: 'listPatient', component: PatientListComponent },
  { path: 'documentPatient', component: DocumentPatientComponent },
  { path: 'listFavoris', component: FavorisComponent },
  { path: 'historyPatient', component: HistoryPatientComponent },
  { path: 'notificationPatient', component: NotificationPatientComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
