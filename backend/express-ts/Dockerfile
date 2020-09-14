FROM node:current-alpine

ARG PORT=8080

RUN apk add --update nodejs

COPY app /app
WORKDIR /app

RUN yarn install
RUN yarn build

CMD ["yarn", "start"]
