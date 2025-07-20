enter:
	docker compose -f docker-compose.yml exec portfolio sh

lint:
	docker compose run --rm portfolio npm run lint

install:
	docker compose run --rm portfolio npm install

start:
	docker compose up --build