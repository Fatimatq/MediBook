package com.backend.controller;


import com.backend.dao.Docteur;
import com.backend.services.DocteurService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/docteurs")
public class DocteurController {

    private final DocteurService docteurService;

    public DocteurController(DocteurService docteurService) {
        this.docteurService = docteurService;
    }

    @GetMapping
    public List<Docteur> getAllDocteurs() {
        return docteurService.findAllDocteurs();
    }

    @GetMapping("/{id}")
    public Optional<Docteur> getDocteurById(@PathVariable Long id) {
        return docteurService.findDocteurById(id);
    }

    @PostMapping
    public Docteur createDocteur(@RequestBody Docteur docteur) {
        return docteurService.saveDocteur(docteur);
    }

    @PutMapping("/{id}")
    public Docteur updateDocteur(@PathVariable Long id, @RequestBody Docteur docteur) {
        docteur.setId_docteur(id);
        return docteurService.updateDocteur(docteur);
    }

    @DeleteMapping("/{id}")
    public void deleteDocteur(@PathVariable Long id) {
        docteurService.deleteDocteur(id);
    }
}

