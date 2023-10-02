package com.project.apigateway.filter;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.server.PathContainer;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

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
            if (!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
                throw new RuntimeException("Missing authorization information");
            }

            String authHeader = exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);

            String[] parts = authHeader.split(" ");

            if (parts.length != 2 || !"Bearer".equals(parts[0])) {
                throw new RuntimeException("Incorrect authorization structure");
            }
            PathContainer.Element element = exchange.getRequest().getPath().pathWithinApplication().elements().get(1);

            String requestType = ((PathContainer.PathSegment) element).valueToMatch();

            return webClientBuilder.build()
                    .get()
                    .uri(uriBuilder -> uriBuilder.path("/auth/validate/"+requestType).queryParam("token",parts[1]).build())
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
