#!/bin/bash
DEPLOY_USER=cooldev
DEPLOY_SERVER=vallentuna.su.eagle.productions

echo "Deploying to development into ${DEPLOY_SERVER}"
ssh ${DEPLOY_USER}@${DEPLOY_SERVER} 'bash' < ./deploy/development.sh

# Install last PM2
yarn global add pm2

# Pull code
cd /home/cooldev/vallentuna/development
git checkout main
git pull origin main

# Build and deploy
yarn install
yarn run build
pm2 --name vallentuna-backend-development start dist/main.js
pm2 restart vallentuna-backend-development