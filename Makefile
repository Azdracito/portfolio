enter:
	docker compose -f docker-compose.yml exec app sh

lint:
	docker compose run --rm app npm run lint

install:
	docker compose run --rm app npm install

start:
	docker compose up --build