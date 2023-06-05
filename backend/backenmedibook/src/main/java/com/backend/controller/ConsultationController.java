package com.backend.controller;

import com.backend.dao.Consultation;
import com.backend.services.impl.ConsultationServiceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/consultation")
public class ConsultationController {
    private final ConsultationServiceImp consultationService;

    @Autowired
    public ConsultationController(ConsultationServiceImp consultationService) {
        this.consultationService = consultationService;
    }

    @PostMapping
    public ResponseEntity<Consultation> saveConsultation(@RequestBody Consultation consultation) {
        Consultation savedConsultation = consultationService.saveConsultation(consultation);
        return new ResponseEntity<>(savedConsultation, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Consultation>> getAllConsultations() {
        List<Consultation> consultations = consultationService.getAllConsultations();
        return new ResponseEntity<>(consultations, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Consultation> getConsultationById(@PathVariable Long id) {
        Optional<Consultation> consultation = consultationService.getConsultationById(id);
        return consultation.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Consultation> updateConsultation(@PathVariable Long id, @RequestBody Consultation consultation) {
        Optional<Consultation> existingConsultation = consultationService.getConsultationById(id);
        if (existingConsultation.isPresent()) {
            consultation.setConsultationId(id);
            Consultation updatedConsultation = consultationService.updateConsultation(consultation);
            updatedConsultation.setConsultationId(id);
            return new ResponseEntity<>(updatedConsultation, HttpStatus.OK);
        } else {
        	consultation.setConsultationId(id);
            consultationService.saveConsultation(consultation);
            return new ResponseEntity<>(consultation, HttpStatus.OK);
        }
		
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteConsultation(@PathVariable Long id) {
        Optional<Consultation> existingConsultation = consultationService.getConsultationById(id);
        if (existingConsultation.isPresent()) {
            consultationService.deleteConsultation(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
}
