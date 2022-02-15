# JsonServerPOC
## Como utilizar ?
#### 1. Instalar as dependências:
```
$ npm install
```
#### 2. Instalar o stubby globalmente:
```
$ npm install -g stubby
```
#### 3. Instalar o docker:
https://itnext.io/goodbye-docker-desktop-hello-minikube-3649f2a1c469

#### 4. Subir o ambiente via docker compose (stubby):
```
$ cd mock-server
$ sh ./entrypoint.sh
(Ainda não está funcionando) $ docker-compose -f docker-compose.yml up -d --build --force-recreate
```
O Stubby estará presente em "http://localhost:8882/".
