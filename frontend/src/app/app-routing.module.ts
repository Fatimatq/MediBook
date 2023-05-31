import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirsthomeComponent } from './firsthome/firsthome.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';

import { HomepatientComponent } from './homepatient/homepatient.component';
import { AuthGuard } from './uth.guard';

import { MediFolderComponent } from './medi-folder/medi-folder.component';
import { DashbordComponent } from './dashbord/dashbord.component';


const routes: Routes = [
  {
    path: '', component: FirsthomeComponent
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
    path:"homepatient",component: HomepatientComponent 
  }
,
  {path:'mediFolder', component:MediFolderComponent  },
  {path:'dashbord', component:DashbordComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
