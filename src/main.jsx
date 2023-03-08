import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEINTOGKMHYhuQSbKZ5AQZVpAWE9D1zmI",
  authDomain: "coder-react-c10f1.firebaseapp.com",
  projectId: "coder-react-c10f1",
  storageBucket: "coder-react-c10f1.appspot.com",
  messagingSenderId: "1000116563545",
  appId: "1:1000116563545:web:668595082a7e3eb3dacb48"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
