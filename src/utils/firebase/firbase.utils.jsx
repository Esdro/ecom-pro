// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHJBFTGlhk9iMNqWBE_ESWo93q6hQPJpI",
    authDomain: "ecom-react-31016.firebaseapp.com",
    projectId: "ecom-react-31016",
    storageBucket: "ecom-react-31016.appspot.com",
    messagingSenderId: "214383956165",
    appId: "1:214383956165:web:8117255a25a0f0fb6c20ac",
    measurementId: "G-KKZBJ8GFGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
}
)

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = new getFirestore();

export const createUsersDoc = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return ;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const snapShotUserRef = await getDoc(userDocRef);

    if (!snapShotUserRef.exists()) {

        const { displayName, email } = userAuth
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });

        } catch (err) {
            console.log('Error while creating our user ' + err.message)
        }
    }
    return console.log(snapShotUserRef.exists());
}

export const CreateUserByEmailAndPassword= async (email, password) => {

    if (!auth || !email || !password) return;
    return   await createUserWithEmailAndPassword(auth, email, password);

}

export const SignInUserByEmailAndPassword = async (email, password) => {
    if (!auth || !email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export async function signOutUser () {
    return await signOut(auth)
}
export const onAuthStateChangedHandler = (callBack) => onAuthStateChanged(auth, callBack);
