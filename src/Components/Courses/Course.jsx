import React from "react";
import { useNavigate } from "react-router-dom";
import courses from "../../Utils/AllCoursesData";

function Course({courses}) {
  const Navigate = useNavigate();
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col">
      <img
        src={courses.image}
        alt="Web Design"
        className="rounded-lg w-full h-48 object-cover"
      />
      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        <span className="mr-2">{courses.duration}</span>
        <span className="px-2 py-1 bg-gray-100 rounded-md text-xs font-medium">
          {courses.level}
        </span>
        <span className="ml-auto text-right text-xs">Category: <span className="text-black font-semibold">{courses.category}</span></span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-gray-900">{courses.title}</h3>
      <p className="text-gray-600 mt-1 text-sm grow">
        {courses.description}
      </p>
      <button onClick={() => Navigate(`/coursedetails/${courses.category}`)} className="mt-4 w-full bg-gray-100 hover:bg-amber-500 text-gray-900 font-medium py-2 rounded-lg">
        Get it Now
      </button>
    </div>
  );
}

export default Course;
