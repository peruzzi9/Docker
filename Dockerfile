# what image we want to build from. Here we will use the latest LTS (long term support)
# version 14 of node available from the Docker Hub:
FROM node:lts-alpine

# tool for enabling send sign to process and act with ctrl+c
RUN apk add dumb-init

# ENV NODE_ENV production
# Create app directory ... a directory to hold the application code inside the image
WORKDIR /

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install  -g nodemon
# If you are building your code for production
# RUN npm ci --only=production

# Bundle/include app source .. To bundle your app's source code inside the Docker image, use the COPY instruction:
COPY . .

# binds to port 3000 ... means run image on port 3000
EXPOSE 3000

# CMD [ "npm", "start" ] 
# or CMD npm start

# use dumb-init tool for enabling send sign to process and act with ctrl+c

#CMD ["dumb-init", "node", "server.js"]
CMD ./start.sh