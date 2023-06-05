package com.backend.services.impl;

import java.io.Console;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.backend.dao.Docteur;
import com.backend.dao.LoginDocteurRequest;
import com.backend.dao.LoginRequest;
import com.backend.dao.LoginResponse;
import com.backend.dao.Patient;
import com.backend.dao.SignupdocteurRequest;
import com.backend.dao.Docteur;
import com.backend.repositories.DocteurRepository;
import com.backend.services.DocteurService;
import com.backend.services.errors.UserAlreadyExistsException;

@Service
public class DocteurServiceImp implements DocteurService {
	
	DocteurRepository docteurRepository;
	public DocteurServiceImp(DocteurRepository docteurRepository) {
		this.docteurRepository=docteurRepository;
	}
	
	@Override
    public List<Docteur> findAllDocteurs() {
        return docteurRepository.findAll();
    }

    @Override
    public Optional<Docteur> findDocteurById(Long id) {
        return docteurRepository.findById(id);
    }

    @Override
    public Docteur saveDocteur(Docteur docteur) {
        return docteurRepository.save(docteur);
    }

    @Override
    public Docteur updateDocteur(Docteur docteur) {
        return docteurRepository.save(docteur);
    }

    @Override
    public void deleteDocteur(Long id) {
        docteurRepository.deleteById(id);
    }
    @Override
    public Docteur signup(String email, String password, String firstName, String lastName, String number, String specialite) throws UserAlreadyExistsException {
        // Check if user already exists
    	System.out.println(docteurRepository.findByEmail_Docteur(email));
        if (docteurRepository.findByEmail_Docteur(email) != null) {
            throw new UserAlreadyExistsException("User with email " + email + " already exists");
        }
        
        // Create new Docteur object
        Docteur docteur = new Docteur();
        docteur.setAdresse(email);
        docteur.setPassword(password);
        docteur.setNom(lastName);
        docteur.setPrenom(firstName);
        docteur.setSpecialite(specialite);
        docteur.setNumeroTelephone(number);
        
        // Save Docteur to database
        return docteurRepository.save(docteur);
    }

	@Override
	public ResponseEntity<LoginResponse> login(LoginDocteurRequest loginDocteurRequest) {
		// TODO Auto-generated method stub
		return null;
	}
	
    
   
	

}
