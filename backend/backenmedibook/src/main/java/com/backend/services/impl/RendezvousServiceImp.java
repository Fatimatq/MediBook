package com.backend.services.impl;



import java.util.List;

import org.springframework.stereotype.Service;

import com.backend.dao.RendezVous;
import com.backend.repositories.RendezVousRepository;
import com.backend.services.RendezvousService;

@Service
public class RendezvousServiceImp implements RendezvousService {
    private RendezVousRepository rendezVousRepository ;

    public RendezvousServiceImp(RendezVousRepository rendezVousRepository) {
        this.rendezVousRepository = rendezVousRepository;
    }

    @Override
    public RendezVous saveRendezVous(RendezVous rendezVous) {
        return rendezVousRepository.save(rendezVous);
    }

    @Override
    public RendezVous updateRendezVous(RendezVous rendezVous) {
        return rendezVousRepository.save(rendezVous);
    }

    @Override
    public void deleteRendezVous(Long id) {
        rendezVousRepository.deleteById(id);
    }

    @Override
    public RendezVous findRendezVousById(Long id) {
        return rendezVousRepository.findById(id).orElse(null);
    }

	@Override
	public List<RendezVous> findAllRendezvous() {
		// TODO Auto-generated method stub
		return rendezVousRepository.findAll();
	}

    // Ajoutez d'autres méthodes spécifiques au service des rendez-vous si nécessaire

}
