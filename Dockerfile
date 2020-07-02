FROM node:lts-alpine

WORKDIR /app

COPY . .
RUN  npm install -g http-server \
npm install \
npm run build \

RUN rm -rf node_modules

EXPOSE 8080
CMD [ "http-server", "dist" ]
