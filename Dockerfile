FROM node:18.14.0
LABEL maintainer="po4tovuj@gmail.com"
WORKDIR /app
COPY package*.json ./
RUN npm install
EXPOSE 3001
CMD [ "yarn", "serve" ]
