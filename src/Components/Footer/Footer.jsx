import React from "react";
import Logo from '../../assets/course-management-logo-dark.png'; // Adjust the path as necessary

function Footer() {
  return (
    <footer className="bg-white py-10 border-t border-gray-200 mt-20">
      <div className="px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700 container">
        
        {/* Logo and Contact */}
        <div className="space-y-4">
          <div className="w-auto h-12 flex items-start rounded-md">
            {/* Replace this span with your actual logo image or component */}
            <img src={Logo} alt="Skillbridge Logo" className="h-10" />
          </div>
          <div className="flex items-center space-x-2">
            <span role="img" aria-label="email">📧</span>
            <span>hello@coursemanagement.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <span role="img" aria-label="phone">📞</span>
            <span>+91 9177389695</span>
          </div>
          <div className="flex items-center space-x-2">
            <span role="img" aria-label="location">📍</span>
            <span>Somewhere in the World</span>
          </div>
        </div>

        {/* Home */}
        <div>
          <h3 className="text-base font-semibold mb-2">Home</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black">Benefits</a></li>
            <li><a href="#" className="hover:text-black">Our Courses</a></li>
            <li><a href="#" className="hover:text-black">Our Testimonials</a></li>
            <li><a href="#" className="hover:text-black">Our FAQ</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-base font-semibold mb-2">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black">Company</a></li>
            <li><a href="#" className="hover:text-black">Achievements</a></li>
            <li><a href="#" className="hover:text-black">Our Goals</a></li>
          </ul>
        </div>

        {/* Social Profiles */}
        <div>
          <h3 className="text-base font-semibold mb-2">Social Profiles</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="bg-gray-100 p-2 rounded-md hover:bg-gray-200" aria-label="Facebook">
              <i className="fab fa-facebook-f text-gray-700"></i>
            </a>
            <a href="#" className="bg-gray-100 p-2 rounded-md hover:bg-gray-200" aria-label="Twitter">
              <i className="fab fa-twitter text-gray-700"></i>
            </a>
            <a href="#" className="bg-gray-100 p-2 rounded-md hover:bg-gray-200" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in text-gray-700"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © 2025 Course Management. Developed by Suresh.
      </div>
    </footer>
  );
};

export default Footer;
