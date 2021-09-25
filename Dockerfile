FROM golang as builder
RUN go get github.com/zirei/redBicicletas

FROM node:14-stretch-slim

# Create app directory
RUN mkdir /app
WORKDIR /app

#Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /app/

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /app/

ENV NODE_ENV QA
ENV PORT 8083

EXPOSE 8083

CMD [ "node", "server.js" ]
