ARG NODE_VERSION=20.10
FROM node:${NODE_VERSION}-alpine AS node_api

RUN set -eux; \
	apk add --no-cache --virtual .build-deps \
		g++ \
		gcc \
		git \
		make \
        python3 \
	;

# Set working directory
WORKDIR /srv/app

# Upgrade npm to the latest version globally
RUN npm -g install npm@latest

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Set the user to run the application
USER node