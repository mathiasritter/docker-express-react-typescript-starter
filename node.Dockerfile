FROM node:14.12-alpine

ENV NODE_ENV=production
ENV TS_NODE_PROJECT=../../tsconfig-for-webpack-config.json
WORKDIR /app

COPY . .

RUN npm install
RUN npm run bootstrap
RUN npm run build

CMD ["npm", "run", "start"]
