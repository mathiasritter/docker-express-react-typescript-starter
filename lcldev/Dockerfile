FROM node:14.12-alpine

WORKDIR /app

COPY lerna.json ./
COPY package*.json ./
COPY packages/core/package*.json ./packages/core/
COPY packages/client/package*.json ./packages/client/
COPY packages/server/package*.json ./packages/server/

RUN npm install
RUN npm run bootstrap

CMD ["npm", "run", "dev"]
