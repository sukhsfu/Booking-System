package com.project.apigateway;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApiGatewayConfiguration {

    @Bean
    public RouteLocator gatewayRouter (RouteLocatorBuilder builder){
        return builder.routes().route( p -> p.path("/provider/**").uri("lb://provider"))
                .route(p -> p.path("/client/**").uri("lb://client"))
                .route(p -> p.path("/appointment/**").uri("lb://appointment"))
                .build();
    }
}
