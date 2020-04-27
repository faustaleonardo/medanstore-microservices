SHA=$(git rev-parse HEAD)

# build images
docker build -t faustaleonardo/medanstore-user-service:latest -t faustaleonardo/medanstore-user-service:$SHA -f ./user-service/Dockerfile ./user-service

docker build -t faustaleonardo/medanstore-category-service:latest -t faustaleonardo/medanstore-category-service:$SHA -f ./category-service/Dockerfile ./category-service

docker build -t faustaleonardo/medanstore-email-service:latest -t faustaleonardo/medanstore-email-service:$SHA -f ./email-service/Dockerfile ./email-service

docker build -t faustaleonardo/medanstore-order-service:latest -t faustaleonardo/medanstore-order-service:$SHA -f ./order-service/Dockerfile ./order-service

docker build -t faustaleonardo/medanstore-item-service:latest -t faustaleonardo/medanstore-item-service:$SHA -f ./item-service/Dockerfile ./item-service

docker build -t faustaleonardo/medanstore-payment-service:latest -t faustaleonardo/medanstore-payment-service:$SHA -f ./payment-service/Dockerfile ./payment-service

docker build -t faustaleonardo/medanstore-picture-service:latest -t faustaleonardo/medanstore-picture-service:$SHA -f ./picture-service/Dockerfile ./picture-service

docker build -t faustaleonardo/medanstore-shipping-service:latest -t faustaleonardo/medanstore-shipping-service:$SHA -f ./shipping-service/Dockerfile ./shipping-service

docker build -t faustaleonardo/medanstore-voucher-service:latest -t faustaleonardo/medanstore-voucher-service:$SHA -f ./voucher-service/Dockerfile ./voucher-service

docker build -t faustaleonardo/medanstore-web:latest -t faustaleonardo/medanstore-web:$SHA -f ./web/Dockerfile ./web

# push to docker hub
docker push faustaleonardo/medanstore-user-service:latest
docker push faustaleonardo/medanstore-user-service:$SHA

docker push faustaleonardo/medanstore-category-service:latest
docker push faustaleonardo/medanstore-category-service:$SHA

docker push faustaleonardo/medanstore-email-service:latest
docker push faustaleonardo/medanstore-email-service:$SHA

docker push faustaleonardo/medanstore-order-service:latest
docker push faustaleonardo/medanstore-order-service:$SHA

docker push faustaleonardo/medanstore-item-service:latest
docker push faustaleonardo/medanstore-item-service:$SHA

docker push faustaleonardo/medanstore-payment-service:latest
docker push faustaleonardo/medanstore-payment-service:$SHA

docker push faustaleonardo/medanstore-picture-service:latest
docker push faustaleonardo/medanstore-picture-service:$SHA

docker push faustaleonardo/medanstore-shipping-service:latest
docker push faustaleonardo/medanstore-shipping-service:$SHA

docker push faustaleonardo/medanstore-voucher-service:latest
docker push faustaleonardo/medanstore-voucher-service:$SHA

docker push faustaleonardo/medanstore-web:latest
docker push faustaleonardo/medanstore-web:$SHA

# apply config files
kubectl apply -f ./k8s

# deploy images
kubectl set image deployments/user-service-deployment user-service=faustaleonardo/medanstore-user-service:$SHA

kubectl set image deployments/category-service-deployment category-service=faustaleonardo/medanstore-category-service:$SHA

kubectl set image deployments/email-service-deployment email-service=faustaleonardo/medanstore-email-service:$SHA

kubectl set image deployments/order-service-deployment order-service=faustaleonardo/medanstore-order-service:$SHA

kubectl set image deployments/item-service-deployment item-service=faustaleonardo/medanstore-item-service:$SHA

kubectl set image deployments/payment-service-deployment payment-service=faustaleonardo/medanstore-payment-service:$SHA

kubectl set image deployments/picture-service-deployment picture-service=faustaleonardo/medanstore-picture-service:$SHA

kubectl set image deployments/shipping-service-deployment shipping-service=faustaleonardo/medanstore-shipping-service:$SHA

kubectl set image deployments/voucher-service-deployment voucher-service=faustaleonardo/medanstore-voucher-service:$SHA

kubectl set image deployments/web-deployment web=faustaleonardo/medanstore-web:$SHA