package com.project.Client.service;

import com.project.Client.model.Client;

import java.util.Optional;

public interface ClientService {
    Client createNewClient(Client client);

    Optional<Client> getClientByID(int id);

    Optional<Client> getClientByUserName(String userName);
}
