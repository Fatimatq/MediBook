import { Component } from '@angular/core';
import { PatientServiceService } from '../patient-service.service';
import { Patient } from './patient';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  patient:Patient= new Patient()
  constructor(private PatientService: PatientServiceService){}
  module :any ={}
  urlimage1= "../../assets/images/15.png"
  login(){
    console.log(this.patient.email_Patient)
    
    return this.PatientService.login(this.patient.email_Patient,this.patient.password_Patient)
  }
}

console.log("login hh")
