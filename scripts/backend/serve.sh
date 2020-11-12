#!/usr/bin/env bash

npm config set unsafe-perm true

if [ "$NODE_ENV" = "production" ];
then
  npm ci --only=production
else
  npm install
fi

npm install -g @adonisjs/cli

bash /scripts/wait-for-it.sh --host=mysql --port=3306 --timeout=0 -- bash /scripts/backend/migrate.sh

if [ "$NODE_ENV" = "production" ];
then
  adonis serve
else
  adonis serve --dev
fi
