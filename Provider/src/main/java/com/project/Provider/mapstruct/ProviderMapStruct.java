package com.project.Provider.mapstruct;


import com.project.Provider.model.Provider;
import com.project.Provider.model.ProviderResponse;
import com.project.Provider.model.ProviderResponseAppointment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ProviderMapStruct {


    @Mapping(target = "address", expression = "java(provider.getLocation().getAddress() + \" \" + provider.getLocation().getCity() + \", \" + provider.getLocation().getState() + \" \" + provider.getLocation().getPostalCode())")
    ProviderResponse toProviderResponse(Provider provider);


    @Mapping(target = "street" , expression = "java(provider.getLocation().getAddress())")
    @Mapping(target = "cityState" , expression = "java(provider.getLocation().getCity() + \", \" + provider.getLocation().getState() + \" \" + provider.getLocation().getCountry())")
    @Mapping(target = "postalCode" , expression = "java(provider.getLocation().getPostalCode())")
    ProviderResponseAppointment toProviderResponseAppointment (Provider provider);

}

