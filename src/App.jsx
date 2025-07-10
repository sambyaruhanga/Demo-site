import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Posts from './pages/Posts';
import HireMe from './pages/HireMe';
import Projects from './pages/Projects';
import MachineLearning from './pages/MachineLearning';
import WebDevelopment from './pages/WebDevelopment';
import DataAnalysis from './pages/DataAnalysis';



import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            window.history.replaceState(null, '', `/#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const section = location.hash.replace('#', '');
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="pt-20">
      <Navbar activeSection={activeSection} />

      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="machine-learning"><MachineLearning /></div>
      <div id="data-analysis"><DataAnalysis /></div>
      <div id="web-development"><WebDevelopment /></div>
      <div id="posts"><Posts /></div>
      <div id="hire-me"><HireMe /></div>
      <div id="contact"><Contact /></div>
      
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default App;
