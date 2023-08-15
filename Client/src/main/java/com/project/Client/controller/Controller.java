package com.project.Client.controller;

import com.project.Client.model.Client;
import com.project.Client.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
