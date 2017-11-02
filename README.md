# react-redux-firebase
## Work in Progress
A React, Redux and Firebase boilerplate with user Authentication 99% set up.

### Setup
-Log in to https://console.firebase.google.com and create a new project if you don't already have one.

-Firebase login and init will run as a part of the post-install.

Select the following options during the firebase init process:
* Which Firebase CLI features do you want to setup for this folder?
	* Select Database, Hosting and Storage
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
yarn
yarn start
````

#### Deploy
````
yarn run build
firebase deploy
````
