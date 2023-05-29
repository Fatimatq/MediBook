import { Component } from '@angular/core';
import { PatientServiceService } from '../patient-service.service';
import { Patient } from './patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  patient:Patient= new Patient()
  constructor(private PatientService: PatientServiceService,private router: Router){}
  ngOnInit() {
    if (this.PatientService.isAuthenticated()) {
      this.router.navigate(['/homepatient']);
    }
  }
  module :any ={}
  urlimage1= "../../assets/images/15.png"
  login(){
    console.log(this.patient.email_Patient)
    return this.PatientService.login(this.patient.email_Patient,this.patient.password_Patient).subscribe((res:any)=>{
      console.log(res)
      this.PatientService.setAuthenticated(true)
      localStorage.setItem("idPatient", res.patient.id_Patient)
      localStorage.setItem("isAuthenticated",this.PatientService.isAuthenticated().toString())
      console.log(localStorage.getItem("idPatient"))
      this.router.navigate(['/homepatient']);
    })
  }
}

console.log("login hh")
