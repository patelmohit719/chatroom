# CHATROOM
## Technology Used
`Firebase` : Firebase for authentication , real time database and deployment.
`React.js` : Javascript library for frontend.
`HTML & CSS` : for styling react components.


## Available Scripts
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Firebase
### `Firebase Auth`

```const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
```
  
### `Firebase Firestore`
  
``` const sendMessage = async (e) => {
    const { uid, photoURL } = auth.currentUser; //get current user

    //add messages to firestore collection "messages"
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
  }; 
```
  
  ### Screenshots
![alt text](https://drive.google.com/uc?id=1rH1DIbc7bCYvzlwyh4BatYTKSbDlrh37)
  
![alt text](https://drive.google.com/uc?id=12zLoNthCQ_Zb5W5D13tj88rLuKxW0Gyr)
  
