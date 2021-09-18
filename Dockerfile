FROM node:16.4.2-alpine

WORKDIR /cache

COPY ./startup_together/package*.json ./
RUN npm config set unsafe-perm true
RUN npm install

EXPOSE 3000

WORKDIR /startup_together