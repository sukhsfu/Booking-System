package com.project.Provider.repository;


import com.project.Provider.model.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<Provider,Integer> {

    Provider save(Provider provider);

    Optional<Provider> findById(Integer id);
}
