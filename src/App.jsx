import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Pages/Home'
import Login from './Pages/Auth/Login/Login.jsx'
import Signup from './Pages/Auth/Signup/Signup.jsx'
import Courses from './Pages/Course/AllCourses.jsx'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import CourseDetails from './Pages/Course/DetailedCourse.jsx'
import ProtectedRoute from './Contexts/ProtectedRoute.jsx'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
          } />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/course" element={<Courses />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/coursedetails/:category" element={<CourseDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
