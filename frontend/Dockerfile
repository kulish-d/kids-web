FROM node:18-alpine
# RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
# RUN npm run build
EXPOSE 8080
# CMD ["npm", "run", "serve", "--port", "'5000'"]
CMD ["npm", "run", "serve"]
# CMD ["npm", "test:dev"]
# RUN npm run test:dev