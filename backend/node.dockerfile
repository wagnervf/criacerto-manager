FROM node:16.13-slim
MAINTAINER Wagner Freiria

WORKDIR /home/node/app

COPY package*.json ./
RUN npm install


#RUN npm install --no-optional && npm cache clean --force
#RUN npm install -g nodemon

EXPOSE 3100

CMD [ "npm", "npm", "run" ]

#docker build -f node.dockerfile -t wagnerfreiria/node .
#https://www.youtube.com/watch?v=AVNADGzXrrQ&ab_channel=Rocketseat

##Dentro de 
#/home/wagner/Develop/projects/vue-node/backend

# - docker-compose -f mongodb.docker-compose.yml up -d
# - docker start mongo-criacerto


#-  docker build -f node.dockerfile -t wagnerfreiria/node .
#    Verificar os erros no npm install por causa das depência no package.json
# docker run -d -v $(pwd)/api:/home/node/app -p 9001:9001 --link mysql-container --rm --name node-container node-image  
