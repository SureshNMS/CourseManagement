import React from "react";
import { FaCrown, FaTrophy, FaCommentDots, FaHandshake, FaLock, FaPuzzlePiece, FaUsers, FaBolt } from "react-icons/fa";

const About = () => {
  return (
    <div className="text-gray-900 px-6 md:px-16 py-20 space-y-20">
      
      {/* About Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4 text-gray-800">About Course Management</h2>
        <p className="max-w-3xl text-gray-600">
          Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.
        </p>
      </section>

      {/* Achievements Section */}
      <section>
        <h3 className="text-2xl font-bold mb-2 text-gray-800">Achievements</h3>
        <p className="mb-8 text-gray-600">
          Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <FaCrown className="text-amber-500 text-2xl" />, title: "Trusted by Thousands", desc: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals." },
            { icon: <FaTrophy className="text-amber-500 text-2xl" />, title: "Award-Winning Courses", desc: "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies." },
            { icon: <FaCommentDots className="text-amber-500 text-2xl" />, title: "Positive Student Feedback", desc: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials." },
            { icon: <FaHandshake className="text-amber-500 text-2xl" />, title: "Industry Partnerships", desc: "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies." },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white shadow rounded-lg border">
              <div className="flex items-center gap-4 mb-4">{item.icon}<h4 className="font-semibold text-lg">{item.title}</h4></div>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Goals Section */}
      <section>
        <h3 className="text-2xl font-bold mb-2 text-gray-800">Our Goals</h3>
        <p className="mb-8 text-gray-600 max-w-4xl">
          At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passion and make a meaningful impact. Through our carefully crafted courses, we aim to:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <FaLock className="text-amber-500 text-2xl" />, title: "Provide Practical Skills", desc: "We focus on delivering practical skills that are relevant to the current industry demands." },
            { icon: <FaPuzzlePiece className="text-amber-500 text-2xl" />, title: "Foster Creative Problem-Solving", desc: "We encourage creative thinking and problem-solving abilities for real-world challenges." },
            { icon: <FaUsers className="text-amber-500 text-2xl" />, title: "Promote Collaboration and Community", desc: "We foster a supportive community where learners connect, share, and grow." },
            { icon: <FaBolt className="text-amber-500 text-2xl" />, title: "Stay Ahead of the Curve", desc: "We regularly update our content to reflect the latest industry trends." },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white shadow rounded-lg border">
              <div className="flex items-center gap-4 mb-4">{item.icon}<h4 className="font-semibold text-lg">{item.title}</h4></div>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 rounded-xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">
            <span className="text-amber-500">Together</span>, let’s shape the future of digital innovation
          </h3>
          <p className="text-sm text-gray-600 mt-2">Join us on this exciting learning journey and unlock your potential in design and development.</p>
        </div>
        <button className="bg-amber-500 text-white font-medium px-6 py-3 rounded-md hover:bg-amber-600 transition">
          Join Now
        </button>
      </section>
    </div>
  );
};

export default About;
