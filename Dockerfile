FROM node:14
COPY . .
RUN npm install --only=production
CMD [ "node", "index.js" ]
