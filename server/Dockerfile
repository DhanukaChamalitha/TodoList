#server image
FROM node:20-alpine
RUN npm install -g nodemon
WORKDIR /server
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 4001
CMD [ "npm", "start" ]
