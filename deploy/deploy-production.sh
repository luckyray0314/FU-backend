#!/bin/bash

DEPLOY_SERVER=su.eagle.productions

echo "Deploying to production into ${DEPLOY_SERVER}"
ssh cooldev@${DEPLOY_SERVER} 'bash' < ./deploy/server.sh

# Install last PM2
yarn global add pm2

# Pull code
cd /home/cooldev/vallentuna/production
git checkout main
git pull origin main

# Build and deploy
yarn install
yarn run build
pm2 --name vallentuna-backend-production start dist/main.js
pm2 restart vallentuna-backend-production