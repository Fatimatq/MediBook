package com.backend.repositories;

import com.backend.dao.Consultation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsultationRepository extends JpaRepository<Consultation, Long> {
    // Vous pouvez ajouter des méthodes de requête personnalisées ici si nécessaire
}