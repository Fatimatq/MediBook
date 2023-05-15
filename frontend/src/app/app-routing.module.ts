import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirsthomeComponent } from './firsthome/firsthome.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { MediFolderComponent } from './medi-folder/medi-folder.component';

const routes: Routes = [
  {
    path:'',component: FirsthomeComponent},
  {
    path:'logindoctor',component :LoginComponent},
{
        path:'signupdoctor',component :SignupComponent},
        {
          path:'contact',component :NavbarComponent},
          {path:'mediFolder', component:MediFolderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
