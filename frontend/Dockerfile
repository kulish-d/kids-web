FROM node:18-alpine
# RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
EXPOSE 8080
# CMD ["npm", "run", "serve", "--port", "'5000'"]
CMD ["npm", "run", "serve"]
# CMD ["npm", "run", "test:dev"]