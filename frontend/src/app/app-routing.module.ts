import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirsthomeComponent } from './firsthome/firsthome.component';
import { LoginComponent } from './loginpatient/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signuppatient/signup.component';

import { HomepatientComponent } from './homepatient/homepatient.component';
import { AuthGuard } from './uth.guard';

import { MediFolderComponent } from './medi-folder/medi-folder.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LogindocteurComponent } from './logindocteur/logindocteur.component';
import { SignupdocteurComponent } from './signupdocteur/signupdocteur.component';
import { DashboarddoctorComponent } from './dashboarddoctor/dashboarddoctor.component';


const routes: Routes = [
  {
    path: '', component: FirsthomeComponent
  },
  {

    path: 'loginpatient', component: LoginComponent 
  },
  {

    path: 'logindocteur', component: LogindocteurComponent 
  },
  {
    path: 'signupatient', component: SignupComponent 
  },
  {
    path: 'signupdocteur', component: SignupdocteurComponent
  },
  {
    path: 'contact', component: NavbarComponent
  },
  {
    path:"homepatient",component: HomepatientComponent 
  }
,
  {path:'mediFolder', component:MediFolderComponent  },
  {path:'dashbord', component:DashbordComponent  },
  {path:'dashborddoctor', component:DashboarddoctorComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
