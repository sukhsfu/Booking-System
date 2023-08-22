package com.project.Appointment.helper;

import com.project.Appointment.FeignProxy.ClientProxy;
import com.project.Appointment.FeignProxy.ProviderProxy;
import jakarta.ws.rs.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public class ServiceCaller {

    @Autowired
    private ProviderProxy providerProxy;
    @Autowired
    private ClientProxy clientProxy;

    public String getClientById(int clientId){
        String client = null;
        try {
            client = clientProxy.getClientById(clientId);
        }
        catch(NotFoundException ex){
            System.out.println("Not Found");
        }
        catch (Exception ex){
            System.out.println("Exception occurred");
        }
        finally {
            return client;
        }

    }

    public String getProviderById(int providerId){
        String provider = null;
        try{
            provider = providerProxy.getProviderById(providerId);
        }
        catch(NotFoundException ex){
            System.out.println("Not Found");
        }
        catch (Exception ex){
            System.out.println("Exception occureed");
        }
        finally {
            return provider;
        }
    }


}
