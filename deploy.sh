#!/bin/bash
kubectl apply -f frontend/deployment.yml
kubectl apply -f Provider/deployment.yml
kubectl apply -f Client/deployment.yml
kubectl apply -f Appointment/deployment.yml
kubectl apply -f api-gateway/deployment.yml
kubectl apply -f identity-service/deployment.yml
