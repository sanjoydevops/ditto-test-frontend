FROM node:16.13-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install --silent
RUN npm install react-scripts@5.0.0 -g --silent
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
COPY . .
CMD ["npm", "start"]
