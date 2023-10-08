// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import dotenv from 'dotenv'
dotenv.config()
console.log('API Key:', process.env.REACT_APP_API_KEY)
console.log('Auth Domain:', process.env.REACT_APP_AUTH_DOMAIN)
console.log('Project ID:', process.env.REACT_APP_PROJECT_ID)
console.log('Storage Bucket:', process.env.REACT_APP_STORAGE_BUCKET)
console.log('Messaging Sender ID:', process.env.REACT_APP_MESSAGING_SENDER_ID)
console.log('App ID:', process.env.REACT_APP_APP_ID)
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: 'fgi-job-portal',
  storageBucket: 'fgi-job-portal.appspot.com',
  messagingSenderId: '816866803978',
  appId: '1:816866803978:web:639d8f87b6ef77e029baf3',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
