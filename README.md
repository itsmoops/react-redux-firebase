# react-redux-firebase
## Work in Progress
A React, Redux and Firebase boilerplate with user Authentication 99% set up.

### Setup
Log in to <https://console.firebase.google.com> and create a new project if you don't already have one.

Firebase login and init commands will run as a part of the `yarn install` postinstall.

Select the following options during the `firebase init` prompts:
* Which Firebase CLI features do you want to setup for this folder?
	* Select Database, Hosting and Storage
* Select a default Firebase project for this directory:
	* Select the project you just created
* What file should be used for Database Rules?
	* Default or named is fine
* What do you want to use as your public directory?
	* dist
* Configure as a single-page app (rewrite all urls to /index.html)?
	* y
* File dist/index.html already exists. Overwrite?
	* N
* What file should be used for Storage Rules?
	* Default or named is fine

### Usage
#### Develop
````
yarn install
yarn start
````

#### Deploy
````
yarn deploy
````

### Additional Resources:
#### Firebase documentation:
<https://firebase.google.com/docs/>

#### The Firebase YouTube channel has a ton of great videos for getting up to speed on Firebase:

[Getting Started with the Firebase Realtime Database on the Web, Part 1 - Firecasts](https://www.youtube.com/watch?v=noB98K6A0TY)

[Getting Started with the Firebase Realtime Database on the Web, Part 2 - Firecasts](https://www.youtube.com/watch?v=dBscwaqNPuk)

[Getting Started with Firebase Hosting on the Web - Firecasts](https://www.youtube.com/watch?v=meofoNuK3vo)

[Getting Started with Firebase Storage on the Web - Firecasts](https://www.youtube.com/watch?v=SpxHVrpfGgU)

[Node.js apps on Firebase Hosting Crash Course - Firecasts](https://www.youtube.com/watch?v=LOeioOKUKI8)
