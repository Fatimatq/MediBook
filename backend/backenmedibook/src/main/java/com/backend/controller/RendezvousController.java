package com.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.dao.Docteur;
import com.backend.dao.Patient;
import com.backend.dao.RendezVous;
import com.backend.repositories.DocteurRepository;
import com.backend.repositories.PatientRepository;
import com.backend.repositories.RendezVousRepository;
import com.backend.services.RendezvousService;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/rendezvous")
public class RendezvousController {
	private final RendezvousService  rendezvousService;
	private final RendezVousRepository rendezVousRepository;
	private final DocteurRepository docteurRepository;
	private final PatientRepository patientRepository;
	
	public RendezvousController(RendezvousService rendezvousService, RendezVousRepository rendezVousRepository,DocteurRepository docteurRepository, PatientRepository patientRepository) {
		super();
		this.rendezvousService = rendezvousService;
		this.rendezVousRepository = rendezVousRepository;
		this.docteurRepository =docteurRepository;
		this.patientRepository = patientRepository;
		
	}
	@GetMapping
	public List<RendezVous> findallRendezvouss(){
		return rendezvousService.findAllRendezvous();
	}
	@GetMapping("/{id}")
	public RendezVous findRendezvousByid(@PathVariable Long id) {
		return rendezvousService.findRendezVousById(id);
		
	}
	@PostMapping
	public RendezVous saveRendezvous(@RequestBody RendezVous Rendezvous ) {
		return rendezvousService.saveRendezVous(Rendezvous);
	}
	 @PutMapping("/{id}")
	    public ResponseEntity<RendezVous> modifierRendezVous(@PathVariable("id") Long id, @RequestBody RendezVous rendezVousModifie) {
	        RendezVous rendezVous = rendezvousService.modifierRendezVous(id, rendezVousModifie);
	        return ResponseEntity.ok(rendezVous);
	    }
	@DeleteMapping("/{id}")
	public void deleteRendezvous(@PathVariable Long id ) {
		 rendezvousService.deleteRendezVous(id);
	}
	
	@GetMapping("/docteur/{id}")
	public ResponseEntity<List<RendezVous>> getRendezVousByDoctorId(@PathVariable("id") Long doctorId) {
		System.out.println(doctorId);
	    Docteur doctor = docteurRepository.findById(doctorId).orElse(null);
	    System.out.println(doctor);
	    
	    if (doctor == null) {
	        return ResponseEntity.notFound().build();
	    }
	    
	   
		List<RendezVous> rendezvous = rendezVousRepository.findByDocteur(doctor);
	    if (!rendezvous.isEmpty()) {
	        return ResponseEntity.ok().body(rendezvous);
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}

	
	@GetMapping("/patient/{id}")
	public ResponseEntity<List<RendezVous>> getRendezVousByPatientId(@PathVariable("id") Long patientId) {
		System.out.println(patientId);
	    Patient patient = patientRepository.findById(patientId).orElse(null);
	    
	    if (patient == null) {
	        return ResponseEntity.notFound().build();
	    }
	    
	   
		List<RendezVous> rendezvous = rendezVousRepository.findByPatient(patient);
	    if (!rendezvous.isEmpty()) {
	        return ResponseEntity.ok().body(rendezvous);
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}
}
