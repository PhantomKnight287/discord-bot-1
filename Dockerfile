FROM node:14

# Install dependencies
COPY package*.json ./

RUN npm install --only=production


COPY . .
CMD [ "node", "index.js" ]
