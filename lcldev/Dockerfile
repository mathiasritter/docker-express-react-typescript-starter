FROM node:14.12-alpine

WORKDIR /app

COPY lerna.json ./
COPY package*.json ./

RUN npm install
RUN npm run bootstrap

CMD ["npm", "run", "dev"]
