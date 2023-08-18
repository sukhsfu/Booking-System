package com.project.Appointment.helper;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;

import static com.project.Appointment.Constants.*;

public class ServiceCaller {
    public static String getClientDetails(int clientId){
        HashMap<String,Integer> uriVariablesClient = new HashMap<>();
        uriVariablesClient.put("id",clientId);
        String client = null;
        try {
            ResponseEntity<String> forEntityClient = new RestTemplate().getForEntity(CLIENT + FINDBYID, String.class, uriVariablesClient);
            client = forEntityClient.getBody();
        }
        catch (HttpClientErrorException e){
            System.out.println(e);
        }
        finally{
                return client;
        }

    }

    public static String getProviderDetails(int providerId){
        HashMap<String,Integer>uriVariablesProvider = new HashMap<>();
        uriVariablesProvider.put("id",providerId);
        String provider = null;
        try {
            ResponseEntity<String> forEntityProvider = new RestTemplate().getForEntity(PROVIDER+FINDBYID,String.class,uriVariablesProvider);
            provider = forEntityProvider.getBody();
        }
        catch (HttpClientErrorException e){
            System.out.println(e);
        }
        finally{
            return provider;
        }
    }
}
