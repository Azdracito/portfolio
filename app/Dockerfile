ARG NODE_VERSION=lts-alpine
FROM node:${NODE_VERSION}

WORKDIR /srv/app
RUN npm -g install npm@latest
COPY package*.json ./
RUN npm install
USER node