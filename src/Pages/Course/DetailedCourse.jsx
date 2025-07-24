// src/components/UIUXCourse.jsx
import React from "react";
import { useParams, Link, data } from "react-router-dom";
import CourseDetailedData from "../../Utils/DetailedCourseData";
import AllCourseData from "../../Utils/AllCoursesData";
import { FaArrowLeft, FaBackward } from "react-icons/fa";
import { useEffect } from "react";

export default function CourseDetails() {
  const { category } = useParams();
  const courseLevel = AllCourseData[5];
  const course = CourseDetailedData.find((section) => section.category === category);

  useEffect(() => {
    fetch('http://localhost:3000/coursedetails/category/'+category)
    .then(data => {
      return data.json();
    })
    .then(data => {
      console.log("Category Course", data)
    })
  })

  if (!course) {
    return <div className="text-black p-6">This "{category}" category data not found</div>;
  }
  return (
    <div className="text-white p-6 space-y-10">
      <div
        className="p-6 text-center"
      >
        <h2 className="text-4xl font-bold text-gray-900 flex flex-wrap justify-center items-center gap-2.5"> {course.title} 
          <Link
            to="/course"
            className="text-xs font-normal inline-block mt-3"
          >
            <FaArrowLeft className="text-black inline-block" /> back to all courses
          </Link>
        </h2>
        <p className="mt-4 text-gray-900 text-sm max-w-2xl mx-auto">
          {course.description}
        </p>
        <a href="#" className="bg-amber-500 rounded-sm text-xs px-2 py-1 mt-3 inline-block text-center">Rate this course</a>
      </div>

      {/* Video Section */}
      <div className="max-w-3xl mx-auto">
        <div className="rounded-xl overflow-hidden border-4 border-white">
          <img
            src={course.image}
            alt="Video preview"
            className="w-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <p className="text-center text-black text-2xl">Level: {courseLevel.level}</p>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {CourseDetailedData.map((section) => (
          <div
            key={section.id}
            className="bg-white text-black p-6 rounded-xl shadow-md"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <span className="text-2xl font-bold text-gray-400">
                {section.id}
              </span>
            </div>
            <ul className="space-y-3">
              {section.items.map((item, index) => (
                <li
                  key={index}
                  className={`p-4 rounded-lg border ${
                    item.highlighted
                      ? "bg-yellow-100 border-yellow-300"
                      : "bg-gray-50 border-gray-200"
                  } flex justify-between items-center`}
                >
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <span className="text-xs text-gray-500">
                      Lesson 0{index + 1}
                    </span>
                  </div>
                  <div className="text-sm text-gray-700 flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {item.duration}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
