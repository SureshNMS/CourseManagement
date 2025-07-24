import React, {useEffect} from "react";
import Course from "../../Components/Courses/Course"
import CourseData from "../../Utils/AllCoursesData"
import LogosData from "../../Utils/LogosData"
import { useNavigate, Link, data } from "react-router-dom"

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    fetch('http://localhost:3000/course/allcourses')
    .then(data => {
      return data.json()
    })
    .then(data => {
      console.log("All courses from server:", data);
    });
  })
  return (
    <>
      <div className="container">
        <div className="flex items-center justify-center gap-3 bg-white px-4 py-2 rounded-xl shadow-md w-fit mx-auto mt-10">
          <div className="bg-amber-100 p-2 rounded-md">
            <svg
              className="w-5 h-5 text-amber-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 2a1 1 0 012 0v6a1 1 0 01-2 0V2zm.293 11.707a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 15.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3z" />
            </svg>
          </div>
          <p className="text-3xl font-semibold">
            <span className="text-orange-500">Unlock</span>
            <span className="text-gray-900"> Your Creative Potential</span>
          </p>
        </div>
        <div className="text-center mt-3">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            with <span>Online Design and Development Courses.</span>
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Learn from Industry Experts and Enhance Your Skills.
          </p>
        </div>
        <div className="flex gap-4 text-center mx-auto w-fit mt-6">
          <button onClick={() => navigate('/Course')} className="bg-[#FF9500] hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md">
            Explore Courses
          </button>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm w-fit mx-auto mt-14 container">
          <div className="flex justify-between items-center flex-wrap gap-6">
            {
              LogosData.map(logos => (
                <div className="flex-1 text-center border-r last:border-r-0" key={logos.id}>
                  <img src={logos.img} alt={logos.alt} className="mx-auto" />
              </div>
              ))
            }
          </div>
        </div>
        <div className="mt-15 mx-auto max-w-4xl">
          <img
            src="/Home-Banner.png"
            alt="Home Banner"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <section className="max-100 mx-auto px-4 py-12">
          <div className="flex flex-wrap justify-between items-end mb-10">
            <div className="max-w-6xl">
              <h2 className="text-3xl font-semibold text-gray-900">Our Courses</h2>
              <p className="mt-2 text-gray-600 text-base leading-relaxed">
                Unlock your potential with our curated selection of career-ready courses. Whether you're just getting started or advancing your expertise, we offer practical, hands-on learning in design, development, programming, and more.
                Explore real-world projects, get guided by industry experts, and gain the skills that matter.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <button onClick={() => navigate("/Course")} className="bg-white border border-gray-200 text-gray-800 font-medium px-3 py-1 text-xs rounded shadow-sm hover:bg-gray-100">
                View All
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
              CourseData.slice(0, 6).map(course =>(
                <Course key = {course.id} courses = {course} />
              ))
            }
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
