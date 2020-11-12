# Docker Dictionary

## Features
Four hosts are available after run:
1. http://localhost - **frontend**-application (built with NuxtJS)
2. http://localhost:3000 - **backend**-application (API built with AdonisJS)
3. http://localhost:9090 - **dictionary**-application
4. http://localhost:8080 - **phpmyadmin**-application for MySQL database manual reviews

**MySQL database is persistent** since data located in volume.

**Environment variables** can be controlled via .env file.

## Development Mode
Backend and frontend-application will have auto-updates since source code is pass through volume to the container.

1\) Open .env file and setup NODE_ENV variable:
```dotenv
NODE_ENV=development
```

2\) Run containers:
```shell script
sudo docker-compose up -d --build --force-recreate
```

3\) Visit frontend:
```
http://localhost
```

4\) Wait until application is fully loaded.

## Production Mode
1\) Open .env file and setup NODE_ENV variable:
```dotenv
NODE_ENV=prodiction
```

2\) Run containers:
```shell script
sudo docker-compose up -d --build --force-recreate
```

3\) Visit frontend:
```
http://localhost
```

4\) Wait until application is fully loaded.
