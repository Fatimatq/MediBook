import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  constructor(private http:HttpClient) {}
   
  signup(email_Patient:String,password_Patient:String,nom_Patient:String,prenom_Patient:String,birth_Patient:Date,gender_Patient :String){
    const url = 'http://localhost:8080/patient/signup';
    const body = {
      email_Patient: email_Patient,
      password_Patient: password_Patient,
      nom_Patient: nom_Patient,
      prenom_Patient: prenom_Patient,
      birth_Patient: birth_Patient,
      gender_Patient:gender_Patient
    };
    return this.http.post(url,body).subscribe(res => {
      console.log('Patient created!');})
      
  }
  login(email_Patient:String,password_Patient:String){
    const url = 'http://localhost:8080/patient/login';
    const body = {
      email_Patient: email_Patient,
      password_Patient: password_Patient
    }
    return this.http.post(url,body).subscribe(res => {
      console.log('login success');
    })

  }
}
