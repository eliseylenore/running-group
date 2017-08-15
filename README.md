# RunningGroup
### By **Elise St Hilaire**

### Meetup group for programming geeks who want to get in shape.

![alt text](./src/assets/images/athletics-512.png);

### Description
_Sitting in one position (in front of a computer all day) takes a huge toll on programmer's bodies. To combat this, we have created a group that meets during lunch break and goes running. To keep each other accountable, we have a sign in and each of us has different roles in the group. This app keeps track of our attendance and responsibilities._

_This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3._

### Installation
Run the following commands to install dependencies:
```sh
$ npm install
$ bower install
```

## Set up Firebase
_Since our site uses a Firebase database, you'll need to acquire your own credentials._

_Simply open your own account on the [Firebase website](https://firebase.google.com/)_


_Next, go to your user dashboard area and click **Create a New Project**.  Select **Add Firebase to your web app* and Firebase should respond with a pop-up window with your credentials._

_Now that your database exists, create a new file called **api-keys.ts** in the **src/app** directory. Then, place your Firebase credentials, like this:_

```sh
export var masterFirebaseConfig = {
  apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
};

### Serve
Run the following command to run the app:
```sh
$ ng serve
```

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
