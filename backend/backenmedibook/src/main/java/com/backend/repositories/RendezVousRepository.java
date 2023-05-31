package com.backend.repositories;


import com.backend.dao.RendezVous;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RendezVousRepository extends JpaRepository<RendezVous, Long> {

    // Méthodes de requête spécifiques au repository
    
    // ...

}
