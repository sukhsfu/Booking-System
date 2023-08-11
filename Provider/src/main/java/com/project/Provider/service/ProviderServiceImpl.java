package com.project.Provider.service;


import com.project.Provider.model.Provider;
import com.project.Provider.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProviderServiceImpl implements ProviderService {

    @Autowired
    private UserRepository repository;
    @Override
    public Provider addProvider(Provider provider) {
        return repository.save(provider) ;
    }

    @Override
    public Optional<Provider> getProviderByID(int id) {
        return repository.findById(id);
    }

    @Override
    public List<Provider> getProviderByName(String name) {
        return repository.findByNameContaining(name);
    }

    @Override
    public void deleteById(int id) {
        repository.deleteById(id);
    }

    @Override
    public List<Provider> getAllProviders() {
        return repository.findAll();
    }


}
