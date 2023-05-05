import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirsthomeComponent } from './firsthome/firsthome.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path:'',component: FirsthomeComponent},
  {
    path:'loginpatient',component :LoginComponent},
    {
      path:'contact',component :NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
