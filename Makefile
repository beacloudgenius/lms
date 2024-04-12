.PHONY: clean
clean:
	rm -rf .next node_modules && npm i

.PHONY: dev
dev: ## run dev
	npm run dev

.PHONY: build-dev
build-dev: ## Build the development docker image.
	docker compose -f docker/development/docker-compose.yml build

.PHONY: start-dev
start-dev: ## Start the development docker container.
	docker compose -f docker/development/docker-compose.yml up -d --build --force-recreate

.PHONY: logs-dev
logs-dev: ## Start the development docker container.
	docker compose -f docker/development/docker-compose.yml logs -f

.PHONY: stop-dev
stop-dev: ## Stop the development docker container.
	docker compose -f docker/development/docker-compose.yml down --remove-orphans

.PHONY: build-staging
build-staging: ## Build the staging docker image.
	docker compose -f docker/staging/docker-compose.yml build

.PHONY: start-staging
start-staging: ## Start the staging docker container.
	docker compose -f docker/staging/docker-compose.yml up -d

.PHONY: stop-staging
stop-staging: ## Stop the staging docker container.
	docker compose -f docker/staging/docker-compose.yml down

.PHONY: build-production
build-production: ## Build the production docker image.
	docker compose -f docker/production/docker-compose.yml build

.PHONY: start-production
start-production: ## Start the production docker container.
	docker compose -f docker/production/docker-compose.yml up -d

.PHONY: stop-production
stop-production: ## Stop the production docker container.
	docker compose -f docker/production/docker-compose.yml down
