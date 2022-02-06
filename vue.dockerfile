# estágio de compilação
FROM node:lts-alpine as build-stage

MAINTAINER Wagner Freiria

WORKDIR /app
COPY ./front/package*.json ./

RUN npm install

COPY ./front/ .

RUN npm run build

# estágio de produção
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]