package com.project.Appointment.helper;

import com.project.Appointment.FeignProxy.ClientProxy;
import com.project.Appointment.FeignProxy.ProviderProxy;
import com.project.Appointment.model.Client;
import com.project.Appointment.model.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ServiceCaller {

    @Autowired
    private ProviderProxy providerProxy;
    @Autowired
    private ClientProxy clientProxy;

    public Client getClientById(int clientId){
        Client client = null;
        try {
            client = clientProxy.getClientById(clientId);
        }
        catch (Exception ex){
            System.out.println("Exception occurred");
        }
        finally {
            return client;
        }

    }

    public Provider getProviderById(int providerId){
        Provider provider = null;
        try{
            provider = providerProxy.getProviderById(providerId);
        }
        catch (Exception ex){
            System.out.println("Exception occureed");
        }
        finally {
            return provider;
        }
    }

    public int getClientId(String userName){
        int clientId = 0;
        try {
            clientId = clientProxy.getIdFromUserName(userName);
        }
        catch (Exception ex){
            System.out.println("Exception occurred");
        }
        finally {
            return clientId;
        }
    }

    public int getProviderId(String userName){
        int providerId = 0;
        try {
            providerId = providerProxy.getIdFromUserName(userName);
        }
        catch (Exception ex){
            System.out.println("Exception occurred");
        }
        finally {
            return providerId;
        }
    }


}
