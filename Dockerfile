FROM node:14.2-alpine

WORKDIR /app

COPY lerna.json ./
COPY package*.json ./

RUN npm install --global lerna
RUN npm install
RUN npm run bootstrap
RUN npm run build

CMD ["npm", "run", "start"]
