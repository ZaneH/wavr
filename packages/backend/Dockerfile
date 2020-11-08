FROM node:alpine

WORKDIR /usr/src/backend

COPY . .

RUN apk add --no-cache git
RUN npm i

ENV NODE_ENV=production

CMD [ "npm", "run", "start" ]
