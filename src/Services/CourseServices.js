import React from "react";
import { initializeApp } from "firebase/app";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import firebase from "firebase/compat/app";

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

const Courses = [
  {
    id: 1,
    title: "Web Design Fundamentals",
    image: "/Course/web-design.jpg",
    instructor: "John Smith",
    duration: "4 Weeks",
    level: "Beginner",
    category: "Fundamentals",
    description: "Learn HTML, CSS, and layout design to build responsive websites from scratch."
  },
  {
    id: 2,
    title: "UI/UX Design Basics",
    image: "/Course/ui-ux.jpg",
    instructor: "Emily Johnson",
    duration: "6 Weeks",
    level: "Intermediate",
    category: "Research",
    description: "Explore user research, wireframes, and usability testing with real-world projects."
  },
  {
    id: 3,
    title: "React Native App Development",
    image: "/Course/mobile-app.jpg",
    instructor: "David Brown",
    duration: "8 Weeks",
    level: "Intermediate",
    category: "Development",
    description: "Build cross-platform mobile apps using React Native and Expo."
  },
  {
    id: 4,
    title: "Graphic Design for Beginners",
    image: "/Course/graphic-design.jpg",
    instructor: "Sarah Thompson",
    duration: "10 Weeks",
    level: "Beginner",
    category: "Design",
    description: "Master typography, color, layout, and design tools like Illustrator and Photoshop."
  },
  {
    id: 5,
    title: "Front-End Web Development",
    image: "/Course/frontend.jpg",
    instructor: "Michael Adams",
    duration: "10 Weeks",
    level: "Intermediate",
    category: "Development",
    description: "Learn HTML, CSS, JavaScript, and React to build interactive websites."
  },
  {
    id: 6,
    title: "Advanced JavaScript Concepts",
    image: "/Course/advanced-js.jpg",
    instructor: "Jennifer Wilson",
    duration: "6 Weeks",
    level: "Advance",
    category: "Programming",
    description: "Understand closures, async/await, and modular JavaScript in depth."
  },
  {
    id: 7,
    title: "Responsive Web Design",
    image: "/Course/web-design.jpg",
    instructor: "Liam Carter",
    duration: "3 Weeks",
    level: "Beginner",
    category: "Design",
    description: "Use CSS Grid and Flexbox to build mobile-first, accessible layouts."
  },
  {
    id: 8,
    title: "UX Prototyping with Figma",
    image: "/Course/ui-ux.jpg",
    instructor: "Ava Robinson",
    duration: "4 Weeks",
    level: "Intermediate",
    category: "UI/UX",
    description: "Design and animate clickable prototypes using Figma and user flow diagrams."
  },
  {
    id: 9,
    title: "Android Development with Kotlin",
    image: "/Course/mobile-app.jpg",
    instructor: "Noah Patel",
    duration: "6 Weeks",
    level: "Intermediate",
    category: "Development",
    description: "Build fast Android apps using Kotlin, Android Studio, and Material Design."
  },
  {
    id: 10,
    title: "Logo & Branding Design",
    image: "/Course/graphic-design.jpg",
    instructor: "Emma Clark",
    duration: "6 Weeks",
    level: "Beginner",
    category: "Design",
    description: "Design visual brand identity including logos, typography, and color palettes."
  },
  {
    id: 11,
    title: "Tailwind CSS Workshop",
    image: "/Course/frontend.jpg",
    instructor: "Lucas Wright",
    duration: "4 Weeks",
    level: "Intermediate",
    category: "Development",
    description: "Use Tailwind to create fast, scalable components with utility-first CSS."
  },
  {
    id: 12,
    title: "JavaScript DOM & Events",
    image: "/Course/advanced-js.jpg",
    instructor: "Mia Davis",
    duration: "5 Weeks",
    level: "Intermediate",
    category: "Programming",
    description: "Manipulate DOM elements, handle events, and build dynamic UI components."
  },
  {
    id: 13,
    title: "Typography & Visual Hierarchy",
    image: "/Course/graphic-design.jpg",
    instructor: "Ethan Scott",
    duration: "3 Weeks",
    level: "Beginner",
    category: "Design",
    description: "Create clean visual structure through effective use of type and spacing."
  },
  {
    id: 14,
    title: "Wireframing & User Flows",
    image: "/Course/ui-ux.jpg",
    instructor: "Olivia Lewis",
    duration: "6 Weeks",
    level: "Intermediate",
    category: "UI/UX",
    description: "Sketch wireframes and connect screens to define intuitive navigation paths."
  },
  {
    id: 15,
    title: "Build a Real-Time Chat App",
    image: "/Course/advanced-js.jpg",
    instructor: "Henry Walker",
    duration: "7 Weeks",
    level: "Advance",
    category: "Programming",
    description: "Use JavaScript, Node.js and WebSockets to build and deploy a live chat app."
  }
];

async function courseData() {
    try {
        const docRef = await addDoc(collection(db, "courses"), Courses);
        console.log("Course added with ID:", docRef.id);
    }
    catch(err) {
        console.error("Error adding course:", err);
    }
}  


courseData();