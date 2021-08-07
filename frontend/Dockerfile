FROM node:16.6.1-alpine3.11

WORKDIR /usr/src/app

COPY ./client .

RUN npm install; npm run build
CMD npm run start
