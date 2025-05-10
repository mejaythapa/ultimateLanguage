#!/bin/bash

set -e  # Exit on error

echo "🚀 Deploying latest changes to web2..."

# Navigate to the ultimateLanguage project directory
cd ~/n8n-docker-caddy/ultimateLanguage || {
  echo "❌ Failed to navigate to ~/n8n-docker-caddy/ultimateLanguage"
  exit 1
}

# Pull latest Git changes from the master branch
echo "📥 Pulling latest changes from Git..."
git pull origin master

# Go back to the root folder where docker-compose.yml is located
cd ..

# Enable BuildKit bake for better performance
echo "⚙️ Building with BuildKit bake (COMPOSE_BAKE=true)..."
COMPOSE_BAKE=true docker compose build web2

# Restart only the web2 service
echo "🔄 Restarting web2 service..."
docker compose up -d web2

echo "✅ Deployment complete!"
