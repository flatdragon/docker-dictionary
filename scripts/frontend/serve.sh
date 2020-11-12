#!/usr/bin bash

npm config set unsafe-perm true

if [ "$NODE_ENV" = "production" ];
then
  npm ci --only=production

  npm run build

  npm start
else
  npm install

  npm run dev
fi
