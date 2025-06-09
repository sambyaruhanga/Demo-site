import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaGithub } from 'react-icons/fa';
import creditScoring from '../assets/images/creditScoring.png'

const MachineLearningProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Credit Scoring Behavioral Model",
      category: "Machine Learning",
      image: creditScoring,
      objective:
        "Developed a predictive model that assesses creditworthiness using alternative data sources and behavioral patterns, enabling financial inclusion for underserved populations with 85%+ accuracy.",
      achievements: [
        "Reduced default prediction errors by 32% compared to traditional models",
        "Incorporated 15+ non-traditional credit indicators",
        "Developed explainable AI dashboard for regulatory compliance",
        "Deployed as microservice API with 200ms response time",
      ],
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Flask", "Docker"],
      caseStudyLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Customer Churn Prediction",
      category: "Predictive Analytics",
      image: "churnPrediction.jpg",
      objective:
        "Built a model to predict customer churn with 90% accuracy, helping businesses retain valuable customers through targeted interventions.",
      achievements: [
        "Identified key churn indicators with SHAP value analysis",
        "Integrated with CRM systems for real-time predictions",
        "Achieved 92% precision in churn detection",
        "Reduced customer acquisition costs by 27%",
      ],
      technologies: ["Python", "XGBoost", "Pandas", "FastAPI", "AWS Lambda"],
      caseStudyLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Medical Image Classification",
      category: "Computer Vision",
      image: "medicalAI.jpg",
      objective:
        "Created a deep learning model for classifying medical images with 94% accuracy, assisting radiologists in early disease detection.",
      achievements: [
        "Trained on dataset of 50,000+ annotated medical images",
        "Implemented transfer learning with EfficientNet",
        "Developed Grad-CAM visualizations for model interpretability",
        "Deployed as DICOM-compatible service for hospitals",
      ],
      technologies: ["Python", "PyTorch", "OpenCV", "Django", "Google Cloud"],
      caseStudyLink: "#",
      githubLink: "#",
    },
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
    <section id="MachineLearning" className="py-5 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Machine <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Learning</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my machine learning projects showcasing innovative solutions.
          </p>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden border-2 border-blue-500">
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                      {/* Image */}
                      <div className="h-[28rem] flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="max-h-full max-w-full object-contain rounded-lg"
                        />
                      </div>

                      {/* Details */}
                      <div>
                        <div className="flex justify-between items-start mb-6">
                          <h3 className="text-3xl font-bold text-gray-800">{project.title}</h3>
                          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                            {project.category}
                          </span>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-700 mb-2">Objective:</h4>
                          <p className="text-gray-700 leading-relaxed">{project.objective}</p>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-700 mb-2">Key Achievements:</h4>
                          <ul className="text-gray-700 list-disc list-inside space-y-2">
                            {project.achievements.map((achievement, index) => (
                              <li key={index}>{achievement}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-6">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="inline-block bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                          <p className="text-blue-600 font-medium">View Case Study</p>
                          <a
                            href={project.githubLink}
                            className="text-gray-600 text-xl"
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
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-3 rounded-full shadow-md text-blue-600 transition-colors z-10"
            aria-label="Previous project"
          >
            <FaChevronLeft className="text-xl" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-3 rounded-full shadow-md text-blue-600 transition-colors z-10"
            aria-label="Next project"
          >
            <FaChevronRight className="text-xl" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full ${currentProject === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                aria-label={`Show project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachineLearningProjects;
