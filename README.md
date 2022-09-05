
## Firebase Auth Using Javascript

If you're building a new app or adding sign-in to an existing app, Firebase has libraries and services that can help you implement secure authentication without having to build the authentication backend yourself. Firebase Authentication is a complete backend solution for signing in with passwords, federated identity providers, email links, and text messages.

You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, and federated identity providers such as Google Sign-in and Facebook Login.

**Add and initialize the Authentication SDK**

```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

```
## Tech

**Client:** HTML, CSS, JavaScript

**Server:** Firebase

## Screenshots

#### Login Page
![image](https://user-images.githubusercontent.com/35568004/188491896-07c26605-ac3d-4c46-bf92-90c857ebca01.png)

#### Signup Page
![image](https://user-images.githubusercontent.com/35568004/188491948-3129d373-d6d8-45d3-9c08-2baaf8d8f3c7.png)

#### Validation Preview on Signup Page
![image](https://user-images.githubusercontent.com/35568004/188492057-0043d7db-aac4-4f31-9a20-a1b57cee6b18.png)

#### Forgot Password Page
![image](https://user-images.githubusercontent.com/35568004/188492104-f6f7a681-cdf2-4165-bcb1-7a4f55531dcd.png)

#### Dashboard Page
![image](https://user-images.githubusercontent.com/35568004/188492256-c21c813d-22bf-476d-aebf-210892686c63.png)

#### Change Your Password Modal in Dashboard Page
![image](https://user-images.githubusercontent.com/35568004/188492291-c29031c2-ed04-489e-9a75-62748eb2b9a1.png)

## Demo Link

**URL link :** https://abhi-gowda.github.io/Firebase-Auth-Using-Javascript/
## Reference and Documentations

**Firebase Authentication** : https://firebase.google.com/docs/auth/web/start

**Bootstrap 5** : https://getbootstrap.com/docs/5.2/getting-started/introduction/

**Javascript (Modular)** : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

**SweetAlert2** : https://sweetalert2.github.io/

## License

[GNU]()

