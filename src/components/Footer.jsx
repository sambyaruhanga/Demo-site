import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
      window.history.pushState({}, '', `#${id}`);
    }};

  return (
    <footer className="bg-[#191661] w-full text-white py-8 px-4 mt-10 shadow-inner cursor-default select-none">
      {/* Changed max-w-7xl to max-w-6xl and removed mx-auto */}
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-8 ml-4 lg:ml-8">
       
        {/* Branding - Removed all margins/padding from this div */}
        <div className="pl-0 gap-2">
          <h2 className="text-xl font-bold mb-2">BYARUHANGA SAM</h2>
          <p className="text-sm">Data Scientist | Developer | Mentor</p>
        </div>

        {/* Navigation (unchanged) */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
                <li>
                  <Link
                    to="/"
                    onClick={(e) => handleScroll(e, 'home')}
                    className="rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={(e) => handleScroll(e, 'about')}
                    className="rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={(e) => handleScroll(e, 'skills')}
                    className="rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={(e) => handleScroll(e, 'posts')}
                    className="rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105"
                  >
                    Posts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={(e) => handleScroll(e, 'hire-me')}
                    className="rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105"
                  >
                    Hire Me
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={(e) => handleScroll(e, 'contact')}
                    className="rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105"
                  >
                    Contact
                  </Link>
                </li>
          </ul>

        </div>
        {/* Social Media (unchanged) */}
        <div>
          <h3 className="font-semibold mb-2">Follow Me</h3>
          <div className="flex space-x-6 mt-2">
            <a href="https://x.com/sambill0" className="text-gray-300 hover:text-white text-xl" target="_blank" rel="noopener noreferrer" aria-label="Visit Sam Byaruhanga's twitter profile"><FaTwitter size={24} /></a>
            <a href="https://www.linkedin.com/in/byaruhanga-sam-103753116/" target="_blank" rel="noopener noreferrer" aria-label="Visit Sam Byaruhanga's LinkedIn profile"className="text-gray-300 hover:text-white text-xl"><FaLinkedin size={24}  /></a>
            <a href="https://github.com/sambyaruhanga" className="text-gray-300 hover:text-white text-xl"target="_blank" rel="noopener noreferrer" aria-label="Visit Sam Byaruhanga's Github profile"><FaGithub  size={24} /></a>
            <a href="https://medium.com/@byaruhangasam" className="text-gray-300 hover:text-white text-xl"target="_blank" rel="noopener noreferrer" aria-label="Visit Sam Byaruhanga's Medium  profile"><FaMedium size={24}  /></a>
          </div>
        </div>

        {/* Contact (unchanged) */}
        <div className="mt-4 md:mt-0">
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm">Email: <a href="mailto:byaruhangasam30@gmail.com" className="hover:underline">byaruhangasam30@gmail.com
          </a>
          </p>
          <p className="text-sm">Location: Kampala, Uganda</p>
        </div>
      </div>

      {/* Bottom bar (unchanged) */}
      <div className="mt-8 text-center text-xs text-gray-300 border-t border-blue-500 pt-4">
        © {new Date().getFullYear()} BYARUHANGA SAM. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

