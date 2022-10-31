# === 31/10/2022  ===
# docker simple example ( Step by step )
- https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
- Install Docker Desktop on Windows ( https://docs.docker.com/desktop/install/windows-install/ )
- Execute step by step : https://learn.microsoft.com/en-us/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package
- Issue Docker desktop stopped :
  Just go to the config file at 
  C:\Users\<username>\AppData\Roaming\Docker\settings.json, and set "wslEngineEnabled": true , then restart system and start docker desktop . 
- use nodejs sample project : nodejs server

- Create an empty file called Dockerfile ( inside project / beside package.json)
- Create .dockerignore file ( check existing one in this example )

- read hints of this file and configurations 
  ( how we include code in image 
  , how we include command for install all dependencies  
  , how we include running and building commands)

- Create docker account online if you do not have .

- create simple image for simple nodejs server .(docker build . -t docker_user_name/docker_image_name)
  run command : 
  
  docker build . -t alaaalkhatib/node-web-app

- check docker desktop ... you should find the image created .

- Running your image : 
  --with -d runs the container in detached mode, leaving the container running in the background. 
  --The -p flag redirects a public port (49160) to a private port (3000) inside the container. Run the image you previously built:
  command : 

  docker run -p 49160:3000 -d alaaalkhatib/node-web-app
  
  or 
  run using docker desktop

- check docker desktop ... you should find inside containers tab a new container created and running for last image .
- check image is running by request :
 http://localhost:49160/ 
 ( you should get hello world as a response )

- Useful Commands :
-- Get container ID running 
$ docker ps 

-- Print app output
$ docker logs <container id or name>

-- Run Example
Running on http://localhost:8080

-- Kill our running container
$ docker kill <container id or name>

# === 22/09/2022  ===
# Swagger example 
- add explanation comments and images
- extend Swagger examples ... POST API
- With express-jsdoc-swagger docs will be automatically generated with every server restart .
- 


# === 12/07/2021  ===
# Swagger example 
- https://www.npmjs.com/package/express-jsdoc-swagger
- npm i express-jsdoc-swagger --save
- create swagger option file .
- add swagger code to server.js
- add comments and description to APIs
- Go to : http://localhost:3000/api-docs/

# === 09/07/2021  ===
# docker simple example 
- create simple image for simple nodejs server .
