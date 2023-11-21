#!/bin/bash
DEPLOY_USER=cooldev
DEPLOY_SERVER=vallentuna.su.eagle.productions

echo "Deploying to staging into ${DEPLOY_SERVER}"
ssh ${DEPLOY_USER}@${DEPLOY_SERVER} 'bash' < ./deploy/test.sh

# Pull code
cd /home/cooldev/vallentuna/staging
git checkout staging
git pull origin staging

#NVM
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash 
export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh" --no-use
eval "[ -f .nvmrc ] && nvm install || nvm install v18"
node --version
npm --version
sudo ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/node" "/usr/local/bin/node"
sudo ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/npm" "/usr/local/bin/npm"

# Node version
node --version

# Build and deploy
npm ci
npm install env-cmd
npm run build
pm2 start ../ecosystem-staging.config.js