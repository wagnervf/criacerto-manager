# estágio de compilação
FROM node:16.13-slim

MAINTAINER Wagner Freiria

WORKDIR /app
COPY ./front/package*.json ./

RUN npm install

COPY ./front/ .

RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]


