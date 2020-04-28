FROM mhart/alpine-node
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "index.js"]