FROM node:10.15-alpine

WORKDIR /app

RUN apk add --no-cache curl gnupg

RUN adduser -D appuser
RUN chown appuser:appuser /app
USER appuser

RUN curl --compressed -o- -L https://yarnpkg.com/install.sh | ash

COPY package.json yarn.lock ./
RUN yarn install

COPY .eslintrc.js gatsby-config.js  ./
COPY src src
COPY content content
COPY static static

RUN yarn build

CMD ["/bin/ash"]