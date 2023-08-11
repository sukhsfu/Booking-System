package com.project.Provider.service;


import com.project.Provider.model.Provider;

import java.util.List;
import java.util.Optional;


public interface ProviderService {

    Provider addProvider(Provider provider);

    Optional<Provider> getProviderByID(int id);
    List<Provider> getProviderByName(String name);

    void deleteById(int id);

    List<Provider> getAllProviders();
}
