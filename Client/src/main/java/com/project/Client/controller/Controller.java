package com.project.Client.controller;

import com.project.Client.model.Client;
import com.project.Client.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/client")
public class Controller {

    @Autowired
    private ClientService clientService;
    @PostMapping("/create")
    public ResponseEntity<Client> createClient(@RequestBody Client client){
        Client client1 = clientService.createNewClient(client);
        return  new ResponseEntity<>(client1, HttpStatus.CREATED);
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Optional> findById(@PathVariable int id){
        Optional<Client> client = clientService.getClientByID(id);
        HttpStatus httpStatus = HttpStatus.FOUND;
        if(client.isEmpty()){
            httpStatus = HttpStatus.NOT_FOUND;
        }
        return new ResponseEntity<>(client,httpStatus);
    }
}
