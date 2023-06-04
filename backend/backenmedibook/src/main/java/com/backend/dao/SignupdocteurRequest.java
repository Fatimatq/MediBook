package com.backend.dao;

import lombok.Data;

@Data
public class SignupdocteurRequest {

	 private String nom;
	    private String prenom;
	    private String specialite;
	    private String password;
	    private String adresse;
	    private String numeroTelephone;

	  public SignupdocteurRequest(String nom,String prenom,String specialite,String password,String adresse,String numeroTelephone) {
	    	this.adresse=adresse;
	    	this.nom=nom;
	    	this.prenom=prenom;
	    	this.numeroTelephone=numeroTelephone;
	    	this.password=password;
	    	this.specialite=specialite;
	    }

}
