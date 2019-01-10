FROM node:10.6.0-alpine

WORKDIR /usr/app

COPY package.json ./
RUN npm config set registry https://registry.npmjs.org/
RUN npm i --quiet
RUN npm i -g @adonisjs/cli --quiet
RUN apk add --update bash && rm -rf /var/cache/apk/*

COPY . .