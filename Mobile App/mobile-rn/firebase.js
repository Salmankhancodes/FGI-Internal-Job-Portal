import { initializeApp, getApp, getApps} from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCliuBwl2B0dkjb4_DRRkpkOLhgRmDjO_8",
  authDomain: "fgi-job-portal.firebaseapp.com",
  projectId: "fgi-job-portal",
  storageBucket: "fgi-job-portal.appspot.com",
  messagingSenderId: "816866803978",
  appId: "1:816866803978:web:639d8f87b6ef77e029baf3"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db, app}