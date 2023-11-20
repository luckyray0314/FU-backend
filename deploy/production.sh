#!/bin/bash
DEPLOY_USER=cooldev
DEPLOY_SERVER=vallentuna.su.eagle.productions

echo "Deploying to production into ${DEPLOY_SERVER}"
ssh ${DEPLOY_USER}@${DEPLOY_SERVER} 'bash' < ./deploy/production.sh

# Pull code
cd /home/cooldev/vallentuna/production
git checkout main
git pull origin main

# Node version
node --version

# Build and deploy
npm ci
npm run build
pm2 start ecosystem.config.js --env production