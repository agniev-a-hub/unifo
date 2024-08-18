# Define the environment file paths
BACK_NEST_ENV_FILE=./packages/back-nest/.env.development
FRONT_REACT_ENV_FILE=./packages/front-react/.env.development

# Docker Compose commands
apps-dev-up:
	@echo "Running apps in docker (dev mode)"
	docker-compose --env-file $(BACK_NEST_ENV_FILE) --env-file $(FRONT_REACT_ENV_FILE) -f infrastructure/docker-compose.dev.yml up --build

apps-dev-down:
	@echo "Stopping apps in docker (dev mode)"
	docker-compose --env-file $(BACK_NEST_ENV_FILE) --env-file $(FRONT_REACT_ENV_FILE) -f infrastructure/docker-compose.dev.yml down

apps-up:
	@echo "Running apps in docker"
	docker-compose --env-file $(BACK_NEST_ENV_FILE) --env-file $(FRONT_REACT_ENV_FILE) -f infrastructure/docker-compose.prod.yml up --build

apps-down:
	@echo "Stopping apps in docker"
	docker-compose --env-file $(BACK_NEST_ENV_FILE) --env-file $(FRONT_REACT_ENV_FILE) -f infrastructure/docker-compose.prod.yml down

# apps-dev-up:
# 	@echo "Running apps in docker (dev mode)"
# 	docker-compose -f infrastructure/docker-compose.dev.yml up --build
# apps-dev-down:
# 	@echo "Stopping apps in docker (dev mode)"
# 	docker-compose -f infrastructure/docker-compose.dev.yml down
# apps-up:
# 	@echo "Running apps in docker"
# 	docker-compose -f infrastructure/docker-compose.prod.yml up --build
# apps-down:
# 	@echo "Running apps in docker"
