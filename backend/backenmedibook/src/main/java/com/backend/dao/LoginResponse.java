package com.backend.dao;

import lombok.Data;

@Data
public class LoginResponse {
	private String status;
    private String message;
	public LoginResponse(String status, String message) {
		super();
		this.status = status;
		this.message = message;
	}

}
