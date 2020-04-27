SHA=$(git rev-parse HEAD)

docker build -t faustaleonardo/medanstore-web:latest -t faustaleonardo/medanstore-web:$SHA -f ./web/Dockerfile ./web

docker push faustaleonardo/medanstore-web:latest
docker push faustaleonardo/medanstore-web:$SHA

kubectl set image deployments/web-deployment web=faustaleonardo/medanstore-web:$SHA