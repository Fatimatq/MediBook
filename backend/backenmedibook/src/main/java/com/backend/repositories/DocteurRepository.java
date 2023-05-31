package com.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.dao.Docteur;

@Repository
public interface DocteurRepository extends JpaRepository<Docteur, Long> {


}
