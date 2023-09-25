package com.project.Provider.mapstruct;


import com.project.Provider.model.Location;
import com.project.Provider.model.Provider;
import com.project.Provider.model.ProviderResponse;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ProviderMapStruct {


    @Mapping(target = "address", expression = "java(provider.getLocation().getAddress() + \" \" + provider.getLocation().getCity() + \", \" + provider.getLocation().getState() + \" \" + provider.getLocation().getPostalCode())")
    ProviderResponse providertoProviderResponse (Provider provider);

    default String mapAddress(Location location){
        return location.getAddress() + " " + location.getCity() + ", " + location.getState() + " " + location.getPostalCode();
    }
}

