package com.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.dao.RendezVous;
import com.backend.repositories.RendezVousRepository;
import com.backend.services.RendezvousService;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/rendezvous")
public class RendezvousController {
	private final RendezvousService  rendezvousService;
	
	public RendezvousController(RendezvousService rendezvousService) {
		super();
		this.rendezvousService = rendezvousService;
		
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
	@PutMapping
	public RendezVous modifyRendezvous(@RequestBody RendezVous Rendezvous ) {
		return rendezvousService.updateRendezVous(Rendezvous);
	}
	@DeleteMapping("/{id}")
	public void deleteRendezvous(@PathVariable Long id ) {
		 rendezvousService.deleteRendezVous(id);
	}

	

}
