import React from "react";

function Contact() {
  return (
    <div className="flex flex-col container mt-20 mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 max-w-2xl">
        We would love to hear from you! If you have any questions, feedback, or
        suggestions, please feel free to reach out to us. You can contact us via
        email at
        <a
          href="mailto:sureshbabu.pammi@neudesic.com"
          className="text-blue-500 hover:underline"
        ></a>
        <span className="font-semibold"> sureshbabu.pammi@neudes.com </span>
        We strive to respond to all
        inquiries within 24-48 hours. Your input is valuable to us as we
        continue to improve our platform and services.
      </p>
      <p className="text-lg text-gray-700 max-w-2xl mt-4">
        Thank you for your interest in our Course Management System!
      </p>
    </div>
  );
}
export default Contact;
