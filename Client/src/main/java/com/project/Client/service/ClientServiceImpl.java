package com.project.Client.service;

import com.project.Client.model.Client;
import com.project.Client.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class ClientServiceImpl implements  ClientService{


    @Autowired
    private ClientRepository repository;
    @Override
    @Transactional
    public Client createNewClient(Client client) {
        return repository.save(client);
    }

    @Override
    @Transactional
    public Optional<Client> getClientByID(int id) {
        return repository.findById(id);
    }

    @Override
    public Optional<Client> getClientByUserName(String userName) {
        return repository.findByUserName(userName);
    }
}
