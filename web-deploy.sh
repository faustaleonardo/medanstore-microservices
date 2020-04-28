SHA=$(git rev-parse HEAD)

docker build -t faustaleonardo/medanstore-web:latest -t faustaleonardo/medanstore-web:$SHA -f ./web-server/Dockerfile ./web-server

docker push faustaleonardo/medanstore-web:latest
docker push faustaleonardo/medanstore-web:$SHA

kubectl apply -f k8s/web.yaml 
kubectl apply -f k8s/ingress-web.yaml

kubectl set image deployments/web-deployment web=faustaleonardo/medanstore-web:$SHA