import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCnCPm_9D1ZwPMAZdNjjDhXqCymSJwbIrw",
    authDomain: "fitz-monster-emporium-db.firebaseapp.com",
    projectId: "fitz-monster-emporium-db",
    storageBucket: "fitz-monster-emporium-db.appspot.com",
    messagingSenderId: "246918654756",
    appId: "1:246918654756:web:0479e7772d8725c4aee1b1"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });

  export const auth = getAuth();
  
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();
  export const createUserFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userAuth);
    const userSnapshot = await getDoc(userDocRef);
    
    if(!userSnapshot.exists()) {
        const { firstName, lastName, displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log('Error creating the user', error.message);
        }
    } 
    
    return userDocRef;
  }