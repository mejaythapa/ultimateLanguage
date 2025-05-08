#!/bin/bash

echo "🚀 Deploying latest changes..."

# Go to app directory
cd ~/n8n-docker-caddy/ultimateLanguage || exit

# Pull latest changes
git pull origin master

# Go back to root folder where docker-compose.yml lives
cd ..

# Rebuild only web service and restart
docker compose up -d --build web2

echo "✅ Deployment complete."
