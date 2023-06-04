package com.backend.dao;


import java.util.Date;

import javax.persistence.Column;

import lombok.Data;

@Data
public class SignupRequest {
	//patient
    private String email_Patient;
    private String password_Patient;
    private String prenom_Patient;
    private String nom_Patient;
    private Date birth_Patient;
    private String gender_Patient;
    
    //docteur

   
  
    public SignupRequest(String email_Patient, String password_Patient, String prenom_Patient, String nom_Patient, Date birth_Patient, String gender_Patient) {
        this.email_Patient = email_Patient;
        this.password_Patient = password_Patient;
        this.prenom_Patient = prenom_Patient;
        this.nom_Patient = nom_Patient;
        this.birth_Patient = birth_Patient;
        this.gender_Patient = gender_Patient;
    }
  


}
