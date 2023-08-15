package com.project.Provider.service;


import com.project.Provider.model.Provider;
import com.project.Provider.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ProviderServiceImpl implements ProviderService {

    @Autowired
    private UserRepository repository;
    @Override
    @Transactional
    public Provider addProvider(Provider provider) {
        return repository.save(provider) ;
    }

    @Override
    @Transactional
    public Optional<Provider> getProviderByID(int id) {
        return repository.findById(id);
    }

    @Override
    @Transactional
    public List<Provider> getProviderByName(String name) {
        return repository.findByNameContaining(name);
    }

    @Override
    @Transactional
    public void deleteById(int id) {
        repository.deleteById(id);
    }

    @Override
    @Transactional
    public List<Provider> getAllProviders() {
        return repository.findAll();
    }


}
