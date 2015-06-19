FROM node:0.12

RUN mkdir -p /react-google-maps/examples/gh-pages
COPY ./package.json /react-google-maps/package.json
COPY ./examples/gh-pages/package.json /react-google-maps/examples/gh-pages/package.json

WORKDIR /react-google-maps
RUN npm install
WORKDIR /react-google-maps/examples/gh-pages
RUN npm install

COPY . /react-google-maps
