FROM node:10-alpine
COPY . .
RUN yarn install --production
CMD [ "node", "index.js" ]
