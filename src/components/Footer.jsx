import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', 'f9d7e17b-406d-439c-bd25-a21527089f3d');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setPopupMessage('You have subscribed successfully!');
      setShowPopup(true);
      event.target.reset(); // Clear the form fields
    } else {
      setPopupMessage('There was an error subscribing. Please try again.');
      setShowPopup(true);
    }

    setTimeout(() => setShowPopup(false), 3000); // Hide the popup after 3 seconds
  };
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Aarchi</h3>
            <p className="text-gray-400">
              Full-Stack Developer, specializing in web and
              software development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form onSubmit={onSubmit} className="flex items-center justify-center">
              <input
                name="email"
                required
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {showPopup && (
          <div className="fixed bottom-10 right-10 bg-green-500 text-white p-4 rounded shadow-lg">
            {popupMessage}
          </div>
        )}
        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Aarchi. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">

            <a href="https://www.linkedin.com/in/aarchijain/" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/aarchijain1" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;