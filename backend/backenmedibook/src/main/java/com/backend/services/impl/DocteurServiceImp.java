package com.backend.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.backend.dao.Docteur;
import com.backend.repositories.DocteurRepository;
import com.backend.services.DocteurService;

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
	

}
