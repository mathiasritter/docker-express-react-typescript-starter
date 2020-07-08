FROM node:14.2-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm run bootstrap
RUN npm run build

CMD ["npm", "run", "start"]
