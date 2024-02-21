#!/bin/bash

docker compose -f docker-compose.yml run --rm portfolio sh -c "npm install --ignore-scripts"