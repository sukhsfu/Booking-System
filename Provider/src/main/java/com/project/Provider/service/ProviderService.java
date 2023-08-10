package com.project.Provider.service;


import com.project.Provider.model.Provider;
import org.springframework.stereotype.Service;

import java.util.Optional;


public interface ProviderService {

    Provider addNewProvider(Provider provider);

    Optional<Provider> getProvider(int id);
}
