import React, { useState, useEffect, useRef } from 'react';
import { Link} from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const dropdownRef = useRef(null);
  

  const handleSmoothScroll = (e, targetId, linkName) => {
    e.preventDefault();
    closeMenus();
    setActiveLink(linkName);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      window.history.pushState({}, '', `#${targetId}`);
    }
  };

  const closeMenus = () => {
    setMenuOpen(false);
    setProjectsOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProjects = () => setProjectsOpen(!projectsOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProjectsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isProjectsActive = ['Machine Learning', 'Data Analysis', 'Web Development'].includes(activeLink);

  // Auto-highlight active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'skills', name: 'Skills' },
        { id: 'posts', name: 'Posts' },
        { id: 'hire-me', name: 'Hire Me' },
        { id: 'contact', name: 'Contact' }
      ];

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveLink(section.name);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = (
    <>
      <Link
        to="/"
        onClick={(e) => handleSmoothScroll(e, 'home', 'Home')}
        className={`px-2 py-1 rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 ${activeLink === 'Home' ? 'bg-blue-700 text-white' : ''}`}
      >
        Home
      </Link>
      <Link
        to="/about"
        onClick={(e) => handleSmoothScroll(e, 'about', 'About')}
        className={`px-2 py-1 rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 ${activeLink === 'About' ? 'bg-blue-700 text-white' : ''}`}
      >
        About
      </Link>
      <Link
        to="/skills"
        onClick={(e) => handleSmoothScroll(e, 'skills', 'Skills')}
        className={`px-2 py-1 rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 ${activeLink === 'Skills' ? 'bg-blue-700 text-white' : ''}`}
      >
        Skills
      </Link>

      <div ref={dropdownRef} className="relative group">
        <button
          onClick={toggleProjects}
          aria-expanded={projectsOpen}
          aria-controls="projects-menu"
          className={`flex items-center gap-1 px-2 py-1 rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 ${isProjectsActive ? 'bg-blue-700 text-white' : ''}`}
        >
        Projects <ChevronDown className="w-4 h-4" />
        </button>

        {projectsOpen && (
          <div
            id="projects-menu"
            role="menu"
            className="absolute left-0 mt-2 bg-gradient-to-br from-blue-200 to-blue-400 text-black rounded-lg shadow-lg w-60 z-10 p-3 space-y-2"
          >
            <Link
              to="/projects/machine-learning"
              onClick={(e) => handleSmoothScroll(e, "machine-learning", 'Machine Learning')}
              className={`block px-2 py-1 rounded transition-all duration-300 hover:bg-blue-500 hover:text-white hover:translate-x-1 ${activeLink === 'Machine Learning' ? 'bg-blue-600 text-white' : ''}`}
            >
              Machine Learning
            </Link>
            <Link
              to="/projects/data-analysis"
              onClick={(e) => handleSmoothScroll(e, "data-analysis", 'Data Analysis')}
              className={`block px-2 py-1 rounded transition-all duration-300 hover:bg-blue-500 hover:text-white hover:translate-x-1 ${activeLink === 'Data Analysis' ? 'bg-blue-600 text-white' : ''}`}
            >
              Data Analysis
            </Link>
            <Link
              to="/projects/web-development"
              onClick={(e) => handleSmoothScroll(e, "web-development", 'Web Development')}
              className={`block px-2 py-1 rounded transition-all duration-300 hover:bg-blue-500 hover:text-white hover:translate-x-1 ${activeLink === 'Web Development' ? 'bg-blue-600 text-white' : ''}`}
            >
              Web Development
            </Link>
          </div>
        )}
      </div>
      <Link
        to="/posts"
        onClick={(e) => handleSmoothScroll(e, 'posts', 'Posts')}
        className={`px-2 py-1 rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 ${activeLink === 'Posts' ? 'bg-blue-700 text-white' : ''}`}
      >
        Posts
      </Link>
      <Link
        to="/hire-me"
        onClick={(e) => handleSmoothScroll(e, 'hire-me', 'Hire Me')}
        className={`px-2 py-1 rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 ${activeLink === 'Hire Me' ? 'bg-blue-700 text-white' : ''}`}
      >
        Hire Me
      </Link>
      <Link
        to="/contact"
        onClick={(e) => handleSmoothScroll(e, 'contact', 'Contact')}
        className={`px-2 py-1 rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 ${activeLink === 'Contact' ? 'bg-blue-700 text-white' : ''}`}
      >
        Contact
      </Link>
    </>
  );

  return (
    <nav role="navigation" className="bg-[#191661] text-white p-4 fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Brand/Logo - stays on the left */}
        <div className="text-3xl font-bold hover:text-blue-400 hover:scale-105 transition-all duration-300">
          BYARUHANGA SAM
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {navLinks}
        </div>
          {/* Mobile menu button - stays on the right */}
        <button
          className="md:hidden p-1"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          {navLinks}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
