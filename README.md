# docker express react typescript starter

This repository is a starter template for a full stack typescript project with express in the back-end and react on the front-end.
The application runs fully isolated in docker containers.

## running locally

Install `docker` on your machine and follow these steps:

1) Start `docker`.
2) In a terminal, navigate to `lcldev` and run `docker-compose up`. This will build and spin up 2 docker containers.
3) As soon as all containers are started, open a browser and go to `https://127.0.0.1`.

To stop the application, run `docker-compose down`.

## deploying to the cloud

Similar to local development, there is a `docker-compose.yml` in the root of this repository.
Use this configuration to create docker containers for production.
