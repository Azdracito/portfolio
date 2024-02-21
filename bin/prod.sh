#!/bin/bash

docker compose -f docker-compose.yml -f docker-compose-prod.yml run --rm portfolio rm -rf dist
docker compose -f docker-compose.yml -f docker-compose-prod.yml run --rm portfolio npm run build
docker compose -f docker-compose.yml -f docker-compose-prod.yml up