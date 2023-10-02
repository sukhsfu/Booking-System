package com.project.Provider.controller;


import com.project.Provider.model.Provider;
import com.project.Provider.model.ProviderResponse;
import com.project.Provider.model.ProviderResponseAppointment;
import com.project.Provider.service.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/provider")
public class Controller {

    @Autowired
    private ProviderService providerService;


    @PostMapping("/create")
    public ResponseEntity<Provider> createProvide(@RequestBody Provider provider, @RequestHeader String userName){
        provider.setUserName(userName);
        Provider provider1 = providerService.addProvider(provider);
        return new ResponseEntity<>(provider1, HttpStatus.CREATED);

    }

    @GetMapping("/findByUserName")
    public ResponseEntity<Optional> findByUserName(@RequestHeader String userName){
        Optional<ProviderResponse> provider = providerService.getProviderByUserName(userName);
        HttpStatus httpStatus = HttpStatus.OK;
        if(provider.isEmpty()){
            httpStatus = HttpStatus.NOT_FOUND;
        }
        return new ResponseEntity<>(provider,httpStatus);
    }



    @GetMapping("/findById/{id}")
    public ResponseEntity<Optional> findById(@PathVariable int id){
        Optional<ProviderResponse> provider = providerService.getProviderByID(id);
        HttpStatus httpStatus = HttpStatus.OK;
        if(provider.isEmpty()){
            httpStatus = HttpStatus.NOT_FOUND;
        }
        return new ResponseEntity<>(provider,httpStatus);
    }

    @GetMapping("/containsName")
    public ResponseEntity<List<ProviderResponse>> findByName(@RequestParam String name){
        List<ProviderResponse> providers = providerService.getProviderByName(name);
        HttpStatus httpStatus = HttpStatus.OK;
        if (providers.isEmpty()){
            httpStatus = HttpStatus.NOT_FOUND;
        }
        return new ResponseEntity<>(providers,httpStatus);
    }

    @PutMapping("/update")
    public ResponseEntity<Provider> updateProvider(@RequestBody Provider provider){
        Provider provider1 = providerService.addProvider(provider);
        return  new ResponseEntity<>(provider1,HttpStatus.OK);
    }

    @DeleteMapping("/deleteById/{id}")
    public ResponseEntity deleteProvider(@PathVariable int id){
        providerService.deleteById(id);
        return new ResponseEntity(HttpStatus.OK);

    }

    @GetMapping("/getAll")
    public ResponseEntity<List<ProviderResponse>> getAllProviders(){
        List<ProviderResponse> providers = providerService.getAllProviders();
        HttpStatus httpStatus = providers.isEmpty() ? HttpStatus.NO_CONTENT : HttpStatus.OK;
        return new ResponseEntity<>(providers,httpStatus);
    }

    @GetMapping("/getAllByService/{service}")
    public ResponseEntity<List<ProviderResponse>> getAllByService(@PathVariable String service){
        List<ProviderResponse> providers = providerService.getProviderByService(service);
        HttpStatus httpStatus = HttpStatus.OK;
        if (providers.isEmpty()){
            httpStatus = HttpStatus.NOT_FOUND;
        }
        return new ResponseEntity<>(providers,httpStatus);
    }

    @GetMapping("/getAllByServiceAndCity")
    public ResponseEntity<List<ProviderResponse>> getAllByServiceAndCity(@RequestParam String service, @RequestParam String city){
        List<ProviderResponse> providers = providerService.getProviderByServiceAndCity(service,city);
        HttpStatus httpStatus = HttpStatus.OK;
        if (providers.isEmpty()){
            httpStatus = HttpStatus.NOT_FOUND;
        }
        return new ResponseEntity<>(providers,httpStatus);
    }

    @GetMapping("/providerAppointment/{id}")
    public ResponseEntity<Optional> providerAppointment(@PathVariable int id){
        Optional<ProviderResponseAppointment> provider = providerService.getProviderAppointment(id);
        HttpStatus httpStatus = HttpStatus.OK;
        if(provider.isEmpty()){
            httpStatus = HttpStatus.NOT_FOUND;
        }
        return new ResponseEntity<>(provider,httpStatus);
    }


}
