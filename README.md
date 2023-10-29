## Setup using docker-compose

Download tmp/docker-compose.yml , then run below commands to run app:

### Run app

```sh
docker-compose up -d
```

### Stop docker

```sh
docker-compose down
```

## Setup using docker

```sh
docker pull farshidgh70/vue-todo:v1
```

```sh
docker run -p 8080:8080 farshidgh70/vue-todo:v1
```

## Setup on Development

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

then open [http://localhost:8080/](http://localhost:8080/)
