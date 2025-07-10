import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

const DataAnalysis = () => {
  const data = [
    // 1. Data Visualization
    {
      topic: "Data Visualization Projects",
      projects: [
        {
          id: 1,
          title: 'Interactive Dashboard for Sales Analytics',
          image: '',
          description: 'Created an interactive dashboard that visualizes sales performance across regions and product categories with drill-down capabilities.',
          technologies: ['Python', 'D3.js', 'Plotly', 'Pandas', 'Flask'],
          features: [
            'Real-time data updates from multiple sources',
            'Customizable views for different user roles',
            'Export functionality for reports',
            'Mobile-responsive design'
          ],
          lessons: 'Learned the importance of user-centered design in data visualization to ensure actionable insights.',
          useCase: 'Ideal for sales teams, business analysts, and executives needing performance insights.',
        },
        {
          id: 2,
          title: 'COVID-19 Trend Analysis Dashboard',
          image: '',
          description: 'Developed a public-facing dashboard tracking COVID-19 cases, vaccinations, and trends with geospatial visualization.',
          technologies: ['JavaScript', 'Leaflet.js', 'Chart.js', 'Python', 'AWS'],
          features: [
            'Animated time-series visualizations',
            'County-level granularity',
            'Vaccination progress tracking',
            'Automated daily data updates'
          ],
          lessons: 'Learned how to handle and visualize rapidly changing public health data effectively.',
          useCase: 'Public health monitoring, government agencies, and research institutions.',
        }
      ]
    },

    // 2. Business Intelligence
    {
      topic: "Business Intelligence Projects",
      projects: [
        {
          id: 1,
          title: 'Retail Inventory Optimization System',
          image: '',
          description: 'Built a BI solution that analyzes sales patterns to optimize inventory levels across 200+ retail locations.',
          technologies: ['Power BI', 'SQL', 'Python', 'Azure', 'Tableau'],
          features: [
            'Reduced overstock by 35% while maintaining 99% availability',
            'Automated reorder recommendations',
            'Seasonal demand forecasting',
            'Integration with ERP systems'
          ],
          lessons: 'Learned how to balance data granularity with performance in large-scale BI systems.',
          useCase: 'Retail chains, warehouse management, and supply chain optimization.',
        },
        {
          id: 2,
          title: 'Customer Segmentation Platform',
          image: '',
          description: 'Developed a clustering-based segmentation system that identifies high-value customer cohorts.',
          technologies: ['R', 'Tableau', 'SQL', 'Scikit-learn', 'Snowflake'],
          features: [
            'RFM (Recency, Frequency, Monetary) analysis',
            'Dynamic segmentation updates',
            'Integration with marketing automation',
            'Lifetime value prediction'
          ],
          lessons: 'Learned the importance of explainable models in business-facing analytics.',
          useCase: 'Marketing teams, e-commerce platforms, and customer relationship management.',
        }
      ]
    },

    // 3. Big Data Analytics
    {
      topic: "Big Data Analytics Projects",
      projects: [
        {
          id: 1,
          title: 'Clickstream Analysis Pipeline',
          image: '',
          description: 'Implemented a system to process and analyze 10TB+ of daily clickstream data from e-commerce platforms.',
          technologies: ['Spark', 'Hadoop', 'Kafka', 'Python', 'AWS EMR'],
          features: [
            'Real-time session tracking',
            'Conversion funnel analysis',
            'Anomaly detection for bot traffic',
            'Personalization recommendations'
          ],
          lessons: 'Learned cost-effective strategies for processing high-volume, low-latency data streams.',
          useCase: 'E-commerce, digital marketing, and user experience optimization.',
        },
        {
          id: 2,
          title: 'IoT Sensor Data Analytics',
          image: '',
          description: 'Created a platform to analyze sensor data from industrial equipment to predict maintenance needs.',
          technologies: ['PySpark', 'TensorFlow', 'Kafka', 'Grafana', 'InfluxDB'],
          features: [
            'Real-time anomaly detection',
            'Predictive maintenance alerts',
            'Equipment health scoring',
            'Integration with field service systems'
          ],
          lessons: 'Learned how to handle and clean noisy sensor data effectively.',
          useCase: 'Manufacturing, energy sector, and industrial equipment monitoring.',
        }
      ]
    }
  ];

  const getTechIcon = (tech) => {
    const icons = {
      'Python': { icon: 'fab fa-python', colorClass: 'text-blue-600' },
      'JavaScript': { icon: 'fab fa-js', colorClass: 'text-yellow-400' },
      'D3.js': { icon: 'fas fa-chart-bar', colorClass: 'text-yellow-500' },
      'Plotly': { icon: 'fas fa-chart-line', colorClass: 'text-blue-800' },
      'Pandas': { icon: 'fas fa-table', colorClass: 'text-green-500' },
      'Flask': { icon: 'fas fa-flask', colorClass: 'text-black' },
      'AWS': { icon: 'fab fa-aws', colorClass: 'text-orange-500' },
      'Leaflet.js': { icon: 'fas fa-map', colorClass: 'text-green-600' },
      'Chart.js': { icon: 'fas fa-chart-pie', colorClass: 'text-red-500' },
      'Power BI': { icon: 'fas fa-chart-area', colorClass: 'text-yellow-600' },
      'SQL': { icon: 'fas fa-database', colorClass: 'text-blue-500' },
      'Azure': { icon: 'fab fa-microsoft', colorClass: 'text-blue-700' },
      'Tableau': { icon: 'fas fa-chart-bar', colorClass: 'text-blue-800' },
      'R': { icon: 'fas fa-r-project', colorClass: 'text-blue-400' },
      'Scikit-learn': { icon: 'fas fa-chart-line', colorClass: 'text-orange-500' },
      'Snowflake': { icon: 'fas fa-snowflake', colorClass: 'text-blue-400' },
      'Spark': { icon: 'fas fa-bolt', colorClass: 'text-orange-600' },
      'Hadoop': { icon: 'fas fa-server', colorClass: 'text-gray-700' },
      'Kafka': { icon: 'fas fa-stream', colorClass: 'text-gray-900' },
      'AWS EMR': { icon: 'fab fa-aws', colorClass: 'text-orange-500' },
      'TensorFlow': { icon: 'fas fa-brain', colorClass: 'text-orange-600' },
      'Grafana': { icon: 'fas fa-chart-line', colorClass: 'text-orange-500' },
      'InfluxDB': { icon: 'fas fa-database', colorClass: 'text-purple-600' },
      '_default': { icon: 'fas fa-code', colorClass: 'text-green-500' }
    };
    
    return icons[tech] || icons['_default'];
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Data Analysis Projects</h1>
        
        {data.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 items-center">
              <span className="gradient-text">{category.topic}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {category.projects.map((project) => (
                <div key={project.id} className="project-card bg-white rounded-lg shadow-lg p-6">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded mb-4" />
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Tools & Frameworks:</h4>
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
                  <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside mb-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600">{feature}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold text-gray-700 mb-2">Lessons Learned:</h4>
                  <p className="text-gray-600 italic mb-4">{project.lessons}</p>
                  <h4 className="font-semibold text-gray-700 mb-2">Use Case:</h4>
                  <p className="text-gray-600">{project.useCase}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DataAnalysis;