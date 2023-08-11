package com.project.Provider.controller;


import com.project.Provider.model.Provider;
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
    public ResponseEntity<Provider> createProvide(@RequestBody Provider provider){
        Provider provider1 = providerService.addProvider(provider);
        return new ResponseEntity<>(provider1, HttpStatus.CREATED);

    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Optional> findById(@PathVariable int id){
        Optional<Provider> provider = providerService.getProviderByID(id);
        HttpStatus httpStatus = HttpStatus.FOUND;
        if(provider.isEmpty()){
            httpStatus = HttpStatus.NOT_FOUND;
        }
        return new ResponseEntity<>(provider,httpStatus);
    }

    @GetMapping("/containsName")
    public ResponseEntity<List<Provider>> findByName(@RequestParam String name){
        List<Provider> providers = providerService.getProviderByName(name);
        HttpStatus httpStatus = HttpStatus.FOUND;
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
    public ResponseEntity<List<Provider>> getAllProviders(){
        List<Provider> providers = providerService.getAllProviders();
        HttpStatus httpStatus = providers.isEmpty() ? HttpStatus.NO_CONTENT : HttpStatus.OK;
        return new ResponseEntity<>(providers,httpStatus);
    }


}
