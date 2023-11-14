
# install the base image
FROM node:21-alpine

# get the project. last"/" is important so the scripts understands to create the folder
COPY package.json /app/ 
COPY src /app/

WORKDIR /app

RUN npm install

CMD ["node", "server.js"]