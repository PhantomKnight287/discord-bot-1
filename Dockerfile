FROM node:latest
LABEL maintainer="0xmrnight@gmail.com"

# Install dependencies
COPY package*.json ./

RUN npm install --only=production


COPY . .
CMD [ "node", "index.js" ]
