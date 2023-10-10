package com.project.apigateway.filter;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpCookie;
import org.springframework.http.server.PathContainer;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Arrays;
import java.util.List;

@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {

    @Autowired
    private WebClient.Builder webClientBuilder;

    public AuthenticationFilter(){
        super(Config.class);
    }

    public static  class Config{

    }

    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {

            HttpCookie userToken = exchange.getRequest().getCookies().getFirst("userToken");

            if (userToken == null) {
                throw new RuntimeException("Missing authorization information");
            }

            String authHeader = userToken.getValue();

            String path = exchange.getRequest().getPath().toString();
            List<String> pathSegments = Arrays.asList(path.split("/"));
            if(pathSegments.size() < 3) {
                throw new RuntimeException("Invalid path format: " + path);
            }

            String requestType = pathSegments.get(2);


            return webClientBuilder.build()
                    .get()
                    .uri(uriBuilder -> uriBuilder.path("/auth/validate/"+requestType).queryParam("token",authHeader).build())
                    .retrieve().bodyToMono(String.class)
                    .map(userName ->
                            {
                                ServerHttpRequest httpRequest = exchange.getRequest().mutate().header("userName",userName).build();
                                return exchange.mutate().request(httpRequest).build();
                            }
                    ).flatMap(chain::filter);
        };
    }
}
