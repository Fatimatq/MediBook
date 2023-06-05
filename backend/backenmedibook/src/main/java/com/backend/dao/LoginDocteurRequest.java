package com.backend.dao;

import lombok.Data;

@Data
public class LoginDocteurRequest {
	private String password;
    private String adresse;
    public LoginDocteurRequest(String adresse, String password) {
		super();
		this.adresse = adresse;
		this.password = password;
	}

}
