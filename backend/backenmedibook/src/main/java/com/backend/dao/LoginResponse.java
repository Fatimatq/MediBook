package com.backend.dao;

import lombok.Data;

@Data
public class LoginResponse {
	private String status;
    private String message;
    private Patient patient;
    private Docteur docteur;
	public LoginResponse(String status, String message,Patient patient) {
		super();
		this.status = status;
		this.message = message;
		this.patient=patient;
	}
	public LoginResponse(String status, String message,Docteur docteur) {
		super();
		this.status = status;
		this.message = message;
		this.docteur=docteur;
	}
	public LoginResponse(String status, String message) {
		super();
		this.status = status;
		this.message = message;
		
	}
}
