import React from "react";
import Courses from "../../Components/Courses/Course";
import CourseData from "../../Utils/AllCoursesData";
import { useEffect } from "react";
import { data } from "react-router-dom";

function Course() {
  useEffect(() => {
    fetch('http://localhost:3000/course/allcourses')
    .then(data => {
      return data.json();
    })
    .then(data => {
      console.log("All courses received", data);
    })
  })
  return (
    <>
      <section className="container px-4 py-12">
        <div className="flex flex-wrap justify-between items-end mb-10">
          <div className="max-w-6xl">
            <h2 className="text-3xl font-semibold text-gray-900">
              Our Courses
            </h2>
            <p className="mt-2 text-gray-600 text-base leading-relaxed">
              Unlock your potential with our curated selection of career-ready
              courses. Whether you're just getting started or advancing your
              expertise, we offer practical, hands-on learning in design,
              development, programming, and more. Explore real-world projects,
              get guided by industry experts, and gain the skills that matter.
            </p>
          </div>
        </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {CourseData.map((course) => (
          <Courses key={course.id} courses={course} />
        ))}
      </div>
      </section>
    </>
  );
}

export default Course;
