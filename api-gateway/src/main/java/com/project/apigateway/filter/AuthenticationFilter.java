package com.project.apigateway.filter;

import com.project.apigateway.fiegnProxy.IdentityProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;

@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {

    @Lazy
    @Autowired
    private IdentityProxy proxy;

    @Autowired
    private RouteValidator validator;
    public AuthenticationFilter(){
        super(Config.class);
    }


    @Override
    public GatewayFilter apply(Config config) {
        return (((exchange, chain) -> {
            if(validator.isSecured.test(exchange.getRequest())){
                if (!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)){
                    throw new RuntimeException("missing authorization header");
                }
                String authHeader = exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);
                if(authHeader != null && authHeader.startsWith("Bearer")){
                    authHeader = authHeader.substring(7);
                }
                try{
                    proxy.validateToken(authHeader);
                }
                catch (Exception e){
                    throw new RuntimeException("Invalid token");
                }
            }
            return chain.filter(exchange);
        }));
    }

    public static  class Config{

    }
}
