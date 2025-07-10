import React from 'react'
import ProfilePic from '../assets/images/profile.jpg'; // adjust path as needed
import { Link } from 'react-router-dom';



const Home = () => {
    const baseYear = 2018; // When your ML/Data Science journey began
    const currentYear = new Date().getFullYear();
    const yearsExperience = currentYear - baseYear;

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
   <section id="home" class="hero-bg min-h-screen w-full text-gray-800 p-5">
    <div class="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
    {/* <div className="m-5 p-4">
        <img src={ProfilePic} alt="Profile" id="Profile"
        style={{ width: '400px', height: '400px' }}
        className="object-cover rounded-full"/></div> */}

        {/* Profile Picture */}
        <div class="relative w-full h-full flex items-center justify-center">
            <img src={ProfilePic} alt="Profile" class="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover border-4 border-white shadow-xl floating">
            </img>

        </div>

        {/* welocome Greetings */}
        <div className="text-center md:text-left max-w-4xl">
            <h1 class="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Lobster', cursive" }}>
                Hi, There! 👋
            </h1>
            <h1 class="text-4xl md:text-6xl font-bold mb-6">
                <span class="gradient-text">Welcome To My Website!</span>
            </h1>
            <h2 class="text-2xl md:text-3xl font-semibold text-gray-600 mb-6">
                I'm a Data Scientist & Full-Stack Developer
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-lgs">
                With <span className="font-bold">{yearsExperience}+</span> years of expertise in <strong>Machine Learning</strong>, <strong>AI</strong>, and <strong>Data Science</strong>,
                I transform raw data into intelligent, scalable solutions. Combined with <strong>full-stack development</strong>, I create smart systems, data-driven applications,
                and beautiful digital experiences.
                <p>
                Let's build something amazing together!
                </p>
            </p>
            {/* CV */}
            
            <div class="flex gap-8">
            <a href="/Byaruhanga-Sam-CV.pdf"
             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
             target="_blank" rel="noopener noreferrer" aria-label="Visit Sam Byaruhanga's Github profile">
                    Download CV
                    <i className="fas fa-download ml-2"></i>
            </a>
                
            </div>
             
        </div >
        {/* Social media icons */}
        <div class="flex justify-center space-x-4">
            <a href="https://x.com/sambill0" class="icon-circle w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm hover:bg-blue-50"
            target="_blank" rel="noopener noreferrer" aria-label="Visit Sam Byaruhanga's twitter profile">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/byaruhanga-sam-103753116/" class="icon-circle w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-700 shadow-sm hover:bg-blue-50"
                     target="_blank" rel="noopener noreferrer" aria-label="Visit Sam Byaruhanga's LinkedIn profile">
                <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/sambyaruhanga" class="icon-circle w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm hover:bg-gray-50"
            target="_blank" rel="noopener noreferrer" aria-label="Visit Sam Byaruhanga's Github profile">
                <i class="fab fa-github"></i>
            </a>
                                                
            <a href="https://medium.com/@byaruhangasam" class="icon-circle w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm hover:bg-gray-50"
            target="_blank" rel="noopener noreferrer" aria-label="Visit Sam Byaruhanga's medium profile">
                <i class="fab fa-medium"></i>
            </a>
        </div>
        {/* Social media icons */}
        <div class="">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="grid justify-left space-x-4">
                    <h2 className="text-2xl"><strong>Interests</strong></h2>
                    <li>Machine Learning</li>
                    <li>Behavioral Economics</li>
                    <li>Web Development</li>
                    <li>Data Science</li>
                    <li>Blockchain</li>
                </div>
                <div class="grid justify-left space-x-4">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold">Education</h2>
                        {/* Education Item 1*/}
                            <div className="flex items-start space-x-4">
                                <i className="fas fa-graduation-cap text-2xl text-gray-700 pt-1">
                                </i>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Postgraduate Diploma in M&E, 2020
                                    </h3>
                                    <p className="text-sm text-gray-500"> Uganda Management Institute, Kampala</p>
                                </div>
                            </div>
                        {/* Education Item 1*/}
                            <div className="flex items-start space-x-4">
                                <i className="fas fa-graduation-cap text-2xl text-gray-700 pt-1">
                                </i>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        Bachelor of Science in Quantitative Economics, 2017
                                    </h3>
                                    <p className="text-sm text-gray-500">Makerere University, Kampala</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
{/* Get In Touch */}
<div class="flex space-x-4">
    <Link to="/" onClick={(e) => handleScroll(e, 'contact')} class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700" > 
        Get In Touch
    </Link>

    <Link to="/" onClick={(e) => handleScroll(e, 'projects')} class="px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-all duration-500">
        View My Work
    </Link>
    </div>
</div>
   </section>
  )
}

export default Home

