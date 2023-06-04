package com.backend.dao;

import lombok.Data;

@Data

public class LoginRequest {
	public LoginRequest(String email_Patient, String password_Patient) {
		super();
		this.email_Patient = email_Patient;
		this.password_Patient = password_Patient;
	}
	private String email_Patient;
    private String password_Patient;

}
