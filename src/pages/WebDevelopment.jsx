import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

//import images
import portfolioImage from '../assets/images/PortfolioWebsite.png';

const WebDevelopment = () => {
  const data = [
    // 1. Websites
    {
      topic: "Website Projects",
      projects: [
        {
          id: 1,
          title: 'Portfolio Website',
          image: portfolioImage,
          description: 'Designed a modern portfolio site with smooth animations and contact form integration.',
          technologies: ['React','TailwindCSS','JavaScript','Vite'],
          features: [
            'Interactive animations',
            'Responsive design',
            'Portfolio showcase',
            'Contact form with email integration',
          ],
          lessons: 'Mastered CSS animations, React, JavaScript and performance optimization.',
          useCase: 'Perfect for creatives and professionals showcasing work.',
        },

         {
          id: 2,
          title: 'E-Commerce Website',
          image: '',
          description: 'Developed a responsive e-commerce site with product filtering, cart functionality, and secure checkout.',
          technologies: ['React', 'Next.js', 'TailwindCSS', 'Stripe', 'Node.js'],
          features: [
            'Mobile-first responsive design',
            'Product search and filtering',
            'Secure payment integration',
            'Admin dashboard for inventory'
          ],
          lessons: 'Learned optimization techniques for faster page loads and better SEO.',
          useCase: 'Ideal for online retailers and small businesses.',
        }
      ]
    },

    // 2. Web Applications
    {
      topic: "Web Application Projects",
      projects: [
        {
          id: 1,
          title: 'Task Management App',
          image: '',
          description: 'Built a collaborative task manager with real-time updates and team permissions.',
          technologies: ['React', 'Firebase', 'Redux', 'Material UI'],
          features: [
            'Real-time sync across devices',
            'Drag-and-drop interface',
            'User role management',
            'Offline capability'
          ],
          lessons: 'Learned real-time data synchronization and conflict resolution.',
          useCase: 'Teams needing collaborative task tracking.',
        },
        {
          id: 2,
          title: 'API Dashboard',
          image: '',
          description: 'Created a monitoring dashboard for API services with analytics and alerting.',
          technologies: ['TypeScript', 'Express', 'Chart.js', 'Docker'],
          features: [
            'Live API health monitoring',
            'Custom alert thresholds',
            'Historical performance data',
            'JWT authentication'
          ],
          lessons: 'Gained experience in WebSocket connections and data visualization.',
          useCase: 'Developers monitoring backend services.',
        }
      ]
    }
  ];

  const getTechIcon = (tech) => {
    const icons = {
      'React': { icon: 'fab fa-react', colorClass: 'text-cyan-400' },
      'Next.js': { icon: 'fab fa-js', colorClass: 'text-black' },
      'TailwindCSS': { icon: 'fas fa-palette', colorClass: 'text-teal-400' },
      'Stripe': { icon: 'fab fa-cc-stripe', colorClass: 'text-blue-500' },
      'Node.js': { icon: 'fab fa-node-js', colorClass: 'text-green-600' },
      'JavaScript': { icon: 'fab fa-js', colorClass: 'text-yellow-400' },
      'GSAP': { icon: 'fas fa-bolt', colorClass: 'text-green-500' },
      'CSS3': { icon: 'fab fa-css3', colorClass: 'text-blue-500' },
      'Netlify': { icon: 'fas fa-server', colorClass: 'text-blue-400' },
      'Firebase': { icon: 'fas fa-fire', colorClass: 'text-yellow-400' },
      'Redux': { icon: 'fas fa-code-branch', colorClass: 'text-purple-500' },
      'Material UI': { icon: 'fas fa-boxes', colorClass: 'text-blue-600' },
      'TypeScript': { icon: 'fas fa-code', colorClass: 'text-blue-600' },
      'Express': { icon: 'fab fa-node-js', colorClass: 'text-gray-700' },
      'Chart.js': { icon: 'fas fa-chart-bar', colorClass: 'text-red-500' },
      'Docker': { icon: 'fab fa-docker', colorClass: 'text-blue-500' },
      '_default': { icon: 'fas fa-code', colorClass: 'text-green-500' }
    };
    
    return icons[tech] || icons['_default'];
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Web Development Projects</h1>
        
        {data.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 items-center">
              <span className="gradient-text">{category.topic}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.projects.map((project) => (
                <div key={project.id} className="project-card bg-white rounded-lg shadow-lg p-6">
                  <div className="w-full h-48 bg-gray-200 rounded mb-4 flex items-center justify-center">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded mb-4" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap">
                      {project.technologies.map((tech, idx) => {
                        const { icon, colorClass } = getTechIcon(tech);
                        const [prefix, iconName] = icon.split(' ');
                        return (
                          <span key={idx} className="tech-tag inline-flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium m-1 border border-gray-200 mr-1">
                            <FontAwesomeIcon 
                              icon={[prefix.replace('fa-', ''), iconName.replace('fa-', '')]} 
                              className={`${colorClass} mr-1`} 
                            />
                            <span className="text-gray-700">{tech}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-700 mb-2">Features:</h4>
                  <ul className="list-disc list-inside mb-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600">{feature}</li>
                    ))}
                  </ul>
                  
                  <div className="space-y-2">
                    <div>
                      <h4 className="font-semibold text-gray-700">Lessons:</h4>
                      <p className="text-gray-600 italic">{project.lessons}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">Use Case:</h4>
                      <p className="text-gray-600">{project.useCase}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebDevelopment;