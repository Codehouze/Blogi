FROM node:alpine
COPY package*.json ./
#Install dependencies
RUN npm install 
# RUN RUN apk add --no-cache make gcc g++ python && \
#   npm install && \
#   npm rebuild bcrypt --build-from-source && \
#   apk del make gcc g++ python
WORKDIR /usr/src/app
COPY . .

CMD ["npm" , "dev"]