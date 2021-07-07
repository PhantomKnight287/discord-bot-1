FROM node:14
LABEL maintainer="0xmrnight@gmail.com"

# Install dependencies
COPY package*.json ./

RUN npm install --only=production


COPY . .
CMD [ "node", "index.js" ]
