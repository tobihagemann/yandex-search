FROM node:8.12.0-alpine
LABEL maintainer="Tobias Hagemann <tobias.hagemann@gmail.com>"

ENV NODE_ENV=production

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production --silent && mv node_modules ../
COPY . .
CMD ["node", "app.js"]

EXPOSE 3000
