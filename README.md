# Dockerization 
![alt text](https://miro.medium.com/max/786/1*rtLO2QWTWYvSrAW7dQnb7g.png)

## What is Docker ?
Docker is an open platform to build, ship and run applications by wrapping them in “containers” ( **Build , Test and Deploy quickly** ).
Docker containers, unlike virtual machines, **can be distributed on any platform without causing compatibility issues**. Your application will remain system agnostic, making it easier to use, build, manage, and deploy to any host system or cloud.
- **Again** Docker is a platform that allows developers to containerize and easily ship software.  
- It helps **eliminate the overhead of configuring environments** to run software by, essentially, shipping the environment along with your code.
- It allows you to freely ship your apps anywhere anytime without any worries. All you need to do is just install Docker on the target machine and run universal commands to get the project running in a matter of minutes.

###Dependency Management Made Easier with Docker
-For example,  if one of your projects requires SQL and another project requires MariaDB, you have to uninstall one to get started with the other, and that’s going to be a serious mess for you leaving your other project unusable.

Docker is here for the rescue! It provides a dependency management mechanism where each project/app can be isolated with all its dependencies in a separate container and the cherry on the top is that **you can run multiple apps (containers) concomitantly on the same machine**.


## What is “container” ? 
 **A container is a runtime instance of an image**
 — what the image becomes in memory when actually executed. It runs completely isolated from the host environment by default, only accessing host files and ports if configured to do so.
 
note : you can run one service per container .

## What is an “image” ? 
 An image is a lightweight, stand-alone, executable package that includes everything needed to run a piece of software, including the code, a runtime, libraries, environment variables, and config files.

![alt text](https://miro.medium.com/max/720/1*PYGO9RYjT2MXPg0m72nwZQ.png)


## Is Docker alternative to GitHub?
Docker belongs to "Virtual Machine Platforms & Containers" category of the tech stack, while GitHub can be primarily classified under "Code Collaboration & Version Control".

Git and Docker are completely different and often used both at the same time. However both have repositories and both can be used to store and deliver code

# Use Docker for developing ( distributing code with environment ) 
# Docker Dev Environments 

allows you to define the code , tooling, dependencies, and runtime stack  ( db , nodejs , mongodb ...)  to develop your app inside a container. 

And it's a container that you can use yourself or share with others.

In the end, it's all about collaboration. 

#### But you aren't sharing an image that you have to push and pull

### please check this

https://docs.docker.com/desktop/dev-environments/create-dev-env/

###practical example Nodejs   

https://medium.com/@pedro.schleder/using-docker-compose-to-create-a-node-js-app-part-2-26416d221af6

## What is Docker Compose
Compose is a tool to running multi-container environments. With Docker Compose we can write a docker-compose.yml file with the details for the containers we need and spin up and down the whole environment with a single command. It makes managing your environment a lot simpler than using a lot of Dockerfile files individually (all parts of your application, like API, database, front-end, etc.).

#  Creating Docker Dev Environments Image 
- **First of all** try the example of Creating Docker Dev Environments Image from docker sample **docker github repository sample project**, using Docker desktop (  I tried and opened project in VS Code ), this project is using Go language , I did not need to install any software to run it inside VS Code terminal , I just run command ```go run main.go```
then open ```http://localhost:8080/``` in browser.
**I guess docker will provide all softwares needed to develope the code (nodejs , npm ,GO ....)**

- adding and configuring docker-compose.yaml file inside new folder( .docker ).
- npm i docker-compose
- check docker-compose.yml config by executing command : ``` docker-compose ps ```
- create batch script to start up depending on env configuration and run it by docker
- execute : ```docker-compose up``` 
  this command will (Builds Image, (re)creates, starts, and attaches to containers for a service.)
  check docker desktop and you will find image is created , also container is created and running

- **Note** : after fixing many issues I stopped on this issue :
  **Error: EPERM: operation not permitted, scandir '/proc/1/map_files/563100f53000-563100f72000'**
  **Error fixed**
  https://stackoverflow.com/questions/47382957/docker-build-image-glob-error-error-eperm-operation-not-permitted-scandir/47383952#47383952
- after fixing error so ```docker-compose up``` is running now without any error (build new image and run container )
- I could not push generated image , I got error , for that follow this steps
- to push this image we follow these steps :

  ```docker images```
  
  then take image id and create local repository for this image
  
  ```docker tag d4f81128889b alaaalkhatib/node-web-app:after_error_fix```
  
  this will create new local repository with tag name "after_error_fix"
  **now we can push successfully useng commands line or docker desktop**

- **Note** : Creating Docker Dev Environments Image does not succeeded on windows using git repository or local project 
            always give wrong project name ( inside docker desktop )

- **Note** : this test is not completed 

https://blog.logrocket.com/node-js-docker-improve-dx-docker-compose/#dockerize-app-docker-multi-stage-build

# === 31/10/2022 2===
# docker pull image 
- we will delete last image "node-web-app:firsttry "from local using docker desktop to test pull remotely
- then we will execute pull command :
```
 docker pull alaaalkhatib/node-web-app:firsttry
```

then check docker desktop to see that "alaaalkhatib/node-web-app:firsttry" is created again .

# === 31/10/2022 2===
# docker Creating Repository / push 
- We can create new Repository using docker website or docker desktop interfaces ( public or private Repository )
- we will use this Repository to push (update) / pull our docker images
- we can push using docker desktop interface or using commands

- First display exiting images and take image ID you wanna push.  
```
 docker images
```
- second create locala repository for image Id (35219c018fe6).  (firsttry is tag name : like commit in git)
```
 docker tag 35219c018fe6 alaaalkhatib/node-web-app:firsttry
```
display the new added image/repository
```
 docker images
```
then we can push :
```
docker push alaaalkhatib/node-web-app:firsttry
```
- alaaalkhatib/node-web-app is the repository 
- now you can find the new commit/tagname (alaaalkhatib/node-web-app:firsttry) existing in local and remote repositories .
- please check docker.png attached with project 

# === 31/10/2022 2===
# docker main commands 
- create simple image for simple nodejs server .(docker build . -t docker_user_name/docker_image_name)
  run command : 
  ```
  docker build . -t alaaalkhatib/node-web-app
  ```
- display all docker images :
 ```
docker images
 ```
- Get list of container ID running 
```
$ docker ps 
```
- Print app output
```
$ docker logs <container id or name>
```
- Run Example
```
Running on http://localhost:8080
```
- Kill our running container
```
$ docker kill <container id or name>
```
kill command doesn't give the container process an opportunity to exit gracefully


- Run docker image command ( first time then we can use start)
  ```
  docker run -p 49160:3000 -d hello alaaalkhatib/node-web-app
  
   ```

   
- Start running image command
  ```
  docker start <container id or name>
  
   ```

- Stop running image command
  ```
  docker stop <container id or name>
  
   ``` 

   docker pause : 
   would still keep memory portion while the container is paused. 
   This memory is used when the container is resumed. 

   docker stop : 
   releases the memory used after the container is stopped.

   
- Remove Container command
  ```
  docker rm <container id or name>
  
   ```

# === 31/10/2022  ===
# docker simple example ( Step by step )
- https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
- Install Docker Desktop on Windows ( https://docs.docker.com/desktop/install/windows-install/ )
- Execute step by step : https://learn.microsoft.com/en-us/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package
- Issue Docker desktop stopped :
  Just go to the config file at 
  ```
  C:\Users\<username>\AppData\Roaming\Docker\settings.json, and set "wslEngineEnabled": true 
  ```
  , then restart system and start docker desktop . 
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
  ```
  docker build . -t alaaalkhatib/node-web-app
  ```
- check docker desktop ... you should find the image created .

- Running your image : 
  --with -d runs the container in detached mode, leaving the container running in the background. 
  --The -p flag redirects a public port (49160) to a private port (3000) inside the container. Run the image you previously built:
  command : 
```
  docker run -p 49160:3000 -d alaaalkhatib/node-web-app
```
  or 
  run using docker desktop

- check docker desktop ... you should find inside containers tab a new container created and running for last image .
- check image is running by request :
```
 http://localhost:49160/ 
```
 ( you should get hello world as a response )

- Useful Commands :
-- Get container ID running 
```
$ docker ps 
```
-- Print app output
```
$ docker logs <container id or name>
```
-- Run Example
```
Running on http://localhost:8080
```
-- Kill our running container
```
$ docker kill <container id or name>
```
# === 22/09/2022  ===
# Swagger example 
- add explanation comments and images
- extend Swagger examples ... POST API
- With express-jsdoc-swagger docs will be automatically generated with every server restart .
- 


# === 12/07/2021  ===
# Swagger example 
- https://www.npmjs.com/package/express-jsdoc-swagger
```
- npm i express-jsdoc-swagger --save
```
- create swagger option file .
- add swagger code to server.js
- add comments and description to APIs
- Go to : http://localhost:3000/api-docs/

# === 09/07/2021  ===
# docker simple example 
- create simple image for simple nodejs server .
