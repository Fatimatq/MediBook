package com.backend.services;

import java.util.List;
import java.util.Optional;

import com.backend.dao.Docteur;


public interface DocteurService {

	Docteur updateDocteur(Docteur docteur);

	void deleteDocteur(Long id);

	Docteur saveDocteur(Docteur docteur);

	Optional<Docteur> findDocteurById(Long id);

	List<Docteur> findAllDocteurs();

}
