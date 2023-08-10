package com.project.Provider.controller;


import com.project.Provider.model.Provider;
import com.project.Provider.service.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/provider")
public class Controller {

    @Autowired
    private ProviderService providerService;


    @PutMapping("/create")
    public ResponseEntity<Provider> createProvide(@RequestBody Provider provider){
        Provider provider1 = providerService.addNewProvider(provider);
        return new ResponseEntity<>(provider1, HttpStatus.CREATED);

    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Optional> findById(@PathVariable int id){
        Optional<Provider> provider = providerService.getProvider(id);
        HttpStatus httpStatus = HttpStatus.FOUND;
        if(provider.isEmpty()){
            httpStatus = HttpStatus.NOT_FOUND;
        }
        return new ResponseEntity<>(provider,httpStatus);
    }




}
