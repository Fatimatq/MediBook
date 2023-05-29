import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';



@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  private isAuthenticateda = false;
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
    return this.http.post(url,body)
      
  }

  login(email_Patient:String,password_Patient:String){
    const url = 'http://localhost:8080/patient/login';
    const body = {
      email_Patient: email_Patient,
      password_Patient: password_Patient
    }
    
    return this.http.post(url,body)

  }
  isAuthenticated(): boolean {
    const value =localStorage.getItem("isAuthenticated")
    if (value==="true"){
      return true
    }
    return false; // Return the authentication status
  }
  setAuthenticated(status: boolean): void {
    this.isAuthenticateda = status; // Set the authentication status
  }
  
}
