package com.project.Provider.service;


import com.project.Provider.model.Provider;
import com.project.Provider.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProviderServiceImpl implements ProviderService {

    @Autowired
    private UserRepository repository;
    @Override
    public Provider addNewProvider(Provider provider) {
        return repository.save(provider) ;
    }

    @Override
    public Optional<Provider> getProvider(int id) {
        return repository.findById(id);
    }
}
