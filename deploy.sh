# build images
docker build -t faustaleonardo/medanstore-user-service:latest -f ./user-service/Dockerfile ./user-service
docker build -t faustaleonardo/medanstore-category-service:latest -f ./category-service/Dockerfile ./category-service
docker build -t faustaleonardo/medanstore-email-service:latest -f ./email-service/Dockerfile ./email-service
docker build -t faustaleonardo/medanstore-order-service:latest -f ./order-service/Dockerfile ./order-service
docker build -t faustaleonardo/medanstore-item-service:latest -f ./item-service/Dockerfile ./item-service
docker build -t faustaleonardo/medanstore-payment-service:latest -f ./payment-service/Dockerfile ./payment-service
docker build -t faustaleonardo/medanstore-picture-service:latest -f ./picture-service/Dockerfile ./picture-service
docker build -t faustaleonardo/medanstore-shipping-service:latest -f ./shipping-service/Dockerfile ./shipping-service
docker build -t faustaleonardo/medanstore-voucher-service:latest -f ./voucher-service/Dockerfile ./voucher-service
docker build -t faustaleonardo/medanstore-web:latest -f ./web/Dockerfile ./web

# push to docker hub
docker push faustaleonardo/medanstore-user-service:latest
docker push faustaleonardo/medanstore-category-service:latest
docker push faustaleonardo/medanstore-email-service:latest
docker push faustaleonardo/medanstore-order-service:latest
docker push faustaleonardo/medanstore-item-service:latest
docker push faustaleonardo/medanstore-payment-service:latest
docker push faustaleonardo/medanstore-picture-service:latest
docker push faustaleonardo/medanstore-shipping-service:latest
docker push faustaleonardo/medanstore-voucher-service:latest
docker push faustaleonardo/medanstore-web:latest

# apply config files
kubectl apply -f ./k8s

# deploy images
kubectl set image deployments/user-service-deployment user-service=faustaleonardo/medanstore-user-service:latest
kubectl set image deployments/category-service-deployment category-service=faustaleonardo/medanstore-category-service:latest
kubectl set image deployments/email-service-deployment email-service=faustaleonardo/medanstore-email-service:latest
kubectl set image deployments/order-service-deployment order-service=faustaleonardo/medanstore-order-service:latest
kubectl set image deployments/item-service-deployment item-service=faustaleonardo/medanstore-item-service:latest
kubectl set image deployments/payment-service-deployment payment-service=faustaleonardo/medanstore-payment-service:latest
kubectl set image deployments/picture-service-deployment picture-service=faustaleonardo/medanstore-picture-service:latest
kubectl set image deployments/shipping-service-deployment shipping-service=faustaleonardo/medanstore-shipping-service:latest
kubectl set image deployments/voucher-service-deployment voucher-service=faustaleonardo/medanstore-voucher-service:latest
kubectl set image deployments/web-deployment web=faustaleonardo/medanstore-web:latest