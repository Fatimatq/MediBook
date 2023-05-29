import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirsthomeComponent } from './firsthome/firsthome.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { HomepatientComponent } from './homepatient/homepatient.component';
import { AuthGuard } from './uth.guard';

const routes: Routes = [
  {
    path: '', component: FirsthomeComponent
  },
  {
    path: 'loginpatient', component: LoginComponent, canActivate:[AuthGuard] 
  },
  {
    path: 'signupatient', component: SignupComponent, canActivate:[AuthGuard] 
  },
  {
    path: 'contact', component: NavbarComponent
  },
  {
    path:"homepatient",component: HomepatientComponent ,canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
