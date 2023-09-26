package com.project.Provider.service;


import com.project.Provider.model.Provider;
import com.project.Provider.model.ProviderResponse;
import com.project.Provider.model.ProviderResponseAppointment;

import java.util.List;
import java.util.Optional;


public interface ProviderService {

    Provider addProvider(Provider provider);

    Optional<ProviderResponse> getProviderByID(int id);
    List<ProviderResponse> getProviderByName(String name);

    void deleteById(int id);

    List<ProviderResponse> getAllProviders();

    List<ProviderResponse> getProviderByService(String service);

    List<ProviderResponse> getProviderByServiceAndCity(String service, String city);

    Optional<ProviderResponseAppointment> getProviderAppointment(int id);
}
