package com.project.Provider.repository;


import com.project.Provider.model.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<Provider,Integer> {

    Provider save(Provider provider);

    Optional<Provider> findById(Integer id);

    Optional<Provider> findByUserName(String userName);

    List<Provider> findByNameContaining(String name);

    void deleteById(Integer id);

    List<Provider> findByServiceContaining(String service);


    @Query("SELECT p FROM Provider p JOIN p.location l WHERE p.service = :service AND l.city = :city")
    List<Provider> findByServiceAndCity(String service, String city);
}
