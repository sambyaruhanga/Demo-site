
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const WebDevelopment = () => {
  const [currentProject, setCurrentProject] = useState(0);

  // Sample web development projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full Stack",
      image: "ecommerce.jpg", // Replace with your image import
      description: "A complete e-commerce solution with product management, cart functionality, and secure checkout process.",
      features: [
        "User authentication with JWT",
        "Product search and filtering",
        "Payment integration with Stripe",
        "Admin dashboard for inventory management",
        "Responsive design for all devices"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Frontend",
      image: "taskapp.jpg", // Replace with your image import
      description: "A collaborative task management application with real-time updates and team functionality.",
      features: [
        "Drag-and-drop task organization",
        "Real-time updates with WebSockets",
        "Team collaboration features",
        "Task prioritization and deadlines",
        "Dark/light mode toggle"
      ],
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS", "React DnD"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Restaurant Booking System",
      category: "Full Stack",
      image: "restaurant.jpg", // Replace with your image import
      description: "A reservation system for restaurants with table management and customer notifications.",
      features: [
        "Table availability calendar",
        "Automated email/SMS confirmations",
        "Waitlist management",
        "Customer profiles and history",
        "Admin analytics dashboard"
      ],
      technologies: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Twilio API"],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  return (
    <section id="WebDevelopment" className="py-20 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">Development</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my full-stack and frontend web applications
          </p>
        </div>

        <div className="relative">
          {/* Project Carousel */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <div className="project-card bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 border-2 border-purple-500 hover:border-purple-700 hover:shadow-xl">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="h-96 flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100 p-6">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="max-h-full max-w-full object-contain rounded-lg shadow-md"
                        />
                      </div>
                      <div className="p-8">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                          <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                            {project.category}
                          </span>
                        </div>

                        <div className="mb-6">
                          <p className="text-gray-600">{project.description}</p>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-base font-semibold text-gray-700 mb-2">Key Features:</h4>
                          <ul className="text-gray-600 list-disc list-inside space-y-2">
                            {project.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, index) => (
                            <span key={index} className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                          <div className="flex space-x-4">
                            <a 
                              href={project.demoLink} 
                              className="text-purple-600 hover:text-purple-800 font-medium flex items-center"
                              target="_blank" 
                              rel="noopener noreferrer"
                              aria-label={`View ${project.title} demo`}
                            >
                              Live Demo
                              <FaExternalLinkAlt className="ml-2 text-sm" />
                            </a>
                            <a 
                              href={project.githubLink} 
                              className="text-gray-500 hover:text-purple-600 text-lg"
                              target="_blank" 
                              rel="noopener noreferrer"
                              aria-label={`View ${project.title} GitHub repository`}
                            >
                              <FaGithub />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-3 rounded-full shadow-md text-purple-600 hover:text-purple-800 hover:bg-purple-50 transition-colors z-10"
            aria-label="Previous project"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button 
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-3 rounded-full shadow-md text-purple-600 hover:text-purple-800 hover:bg-purple-50 transition-colors z-10"
            aria-label="Next project"
          >
            <FaChevronRight className="text-xl" />
          </button>
          
          {/* Project Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button 
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full ${currentProject === index ? 'bg-purple-500' : 'bg-gray-300'}`}
                aria-label={`Show project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;