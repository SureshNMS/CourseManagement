import React from "react";
import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import detailedCourses from "../Utils/DetailedCourseData.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNrq0D-mn3Dgj8GFdDhv2kAabs5kIpuJI",
  authDomain: "coursemanagement-42a4a.firebaseapp.com",
  projectId: "coursemanagement-42a4a",
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