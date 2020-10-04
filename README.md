# Docker Express React TypeScript Starter

This repository is a starter template for a full stack TypeScript project with Express in the back-end and React on the front-end.
The application runs fully isolated in Docker containers.

## Running locally

Install `docker` on your machine and follow these steps:

1) Start `docker`.
2) In a terminal, navigate to `lcldev` and run `docker-compose up`. This will build and spin up a docker container.
3) As soon as the two web servers in the container are started, open a browser and go to `https://127.0.0.1`.

To stop the application, run `docker-compose down`.

## Deploying to the Cloud

Similar to local development, there is a `docker-compose.yml` in the root of this repository.
Use this configuration to create docker containers for production.

Important: When stopping the service you must run `docker-compose down -v` (note the `-v` option) to ensure that you're not using an outdated React volume when starting next time.
