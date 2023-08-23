package com.project.identityservice.repository;

import com.project.identityservice.entity.UserCredential;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserCredentialRepository extends JpaRepository<UserCredential,Integer> {

    Optional<UserCredential> findByUserName(String username);
}
