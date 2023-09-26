package com.project.Provider.service;


import com.project.Provider.mapstruct.ProviderMapStruct;
import com.project.Provider.model.Provider;
import com.project.Provider.model.ProviderResponse;
import com.project.Provider.model.ProviderResponseAppointment;
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

    @Autowired
    private ProviderMapStruct mapper;
    @Override
    @Transactional
    public Provider addProvider(Provider provider) {
        return repository.save(provider) ;
    }

    @Override
    @Transactional
    public Optional<ProviderResponse> getProviderByID(int id) {

        Optional<Provider> provider = repository.findById(id);
        if (provider.isEmpty()){
            return Optional.empty();
        }
        return Optional.ofNullable(mapper.toProviderResponse(provider.get()));
    }

    @Override
    @Transactional
    public List<ProviderResponse> getProviderByName(String name) {

        return repository.findByNameContaining(name).stream().map(provider -> mapper.toProviderResponse(provider)).toList();
    }

    @Override
    @Transactional
    public void deleteById(int id) {
        repository.deleteById(id);
    }

    @Override
    @Transactional
    public List<ProviderResponse> getAllProviders() {
        return repository.findAll().stream().map(provider -> mapper.toProviderResponse(provider)).toList();
    }

    @Override
    public List<ProviderResponse> getProviderByService(String service) {
        return repository.findByServiceContaining(service).stream().map(provider -> mapper.toProviderResponse(provider)).toList();
    }

    @Override
    public List<ProviderResponse> getProviderByServiceAndCity(String service, String city) {
        return repository.findByServiceAndCity(service,city).stream().map(provider -> mapper.toProviderResponse(provider)).toList();
    }

    @Override
    @Transactional
    public Optional<ProviderResponseAppointment> getProviderAppointment(int id) {

        Optional<Provider> provider = repository.findById(id);
        if (provider.isEmpty()){
            return Optional.empty();
        }
        return Optional.ofNullable(mapper.toProviderResponseAppointment(provider.get()));
    }


}
