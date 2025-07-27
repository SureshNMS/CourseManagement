import React from "react";
import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import detailedCourses from "../Utils/DetailedCourseData.js";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function uploadCourses() {
    try {
        for (const detailedCourse of detailedCourses) {
            await setDoc(doc(db, "courses", detailedCourse.id.toString()), detailedCourse);
        }
        console.log("✅ All courses added with custom IDs!");
    }
    catch(err) {
        console.error("Error adding course:", err);
    }
}  


uploadCourses();