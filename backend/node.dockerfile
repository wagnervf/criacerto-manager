FROM node:16.13-slim
MAINTAINER Wagner Freiria

WORKDIR /home/node/app

COPY package*.json ./
RUN npm install


#RUN npm install --no-optional && npm cache clean --force
#RUN npm install -g nodemon

EXPOSE 3100

CMD [ "npm", "npm", "run" ]

