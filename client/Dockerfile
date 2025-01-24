# client image
FROM node:20-apline
WORKDIR /frontend
COPY package*.json .
RUN npm install
COPY . .
CMD [ "npm", "run", "dev" ]