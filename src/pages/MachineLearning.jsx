import React from 'react';
import { FaChevronLeft, FaChevronRight, FaGithub } from 'react-icons/fa';
import { ImNotification } from 'react-icons/im';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


// Add all icons to the library so you can use them without importing them individually
library.add(fas, fab);

// Importing images 
import ETL_Pipeline from '../assets/images/ETL_Pipeline.png';
import DataMining from'../assets/images/DataMining.webp'
import Behavioral_credit_scoring from'../assets/images/Behavioral_credit_scoring.png'
import ApplicationScoreCard from'../assets/images/Application ScoreCard.png'
import Sentiment from'../assets/images/Sentiment Analysis Engine.jpg'
import Chatbot from'../assets/images/Chatbot for Customer Support.png'


const MachineLearning = () => {

  const data = [
    // 1.Data Pipeline 
    {
      topic: "Data Pipeline Projects",
      projects: [
        // Example 1 project 
        {
          id: 1,
          title: 'Real-time ETL Pipeline',
          image:ETL_Pipeline, // Add your image path here
          description: 'Designed a scalable real-time ETL pipeline that processes and transforms data from multiple sources into a unified postgreSQL database, enabling real-time analytics. Case study of crypto trading data from Binance API.',
          technologies: ['Airflow', 'Python', 'Docker','PostgreSQL','PySpark','FastAPI'],
          features: [
            'API integration for real-time data ingestion',
            'ETL process with Apache Airflow',
            'End-to-end monitoring'
          ],
          lessons: 'Learned the importance of data validation and error handling in ETL processes.',
          useCase: 'Ideal for data warehousing, analytics, and real-time reporting.',
        },
        // Example 2 project
        {
          id: 2,
          title: 'Customer Segmentation Using Data Mining',
          image: DataMining, // Replace with actual image path or asset
          description: 'Developed a data mining solution to segment customers based on purchasing behavior using unsupervised learning techniques. The goal was to discover hidden patterns and improve targeted marketing strategies.',
          technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn', 'K-Means Clustering', 'Jupyter Notebook'],
          features: [
            'Performed data cleaning and preprocessing on customer transaction data',
            'Applied K-Means clustering for behavioral segmentation',
            'Visualized customer clusters using PCA and t-SNE',
            'Extracted actionable insights for marketing team',
            'Validated clustering performance using silhouette scores'
          ],
          lessons: 'Gained practical experience in unsupervised learning, feature engineering, cluster analysis, and interpreting high-dimensional data in real business contexts.',
          useCase: 'Ideal for eCommerce platforms or retail businesses looking to enhance customer targeting, loyalty programs, and personalized product recommendations.'
        }
      ]
    },

    //*2.Machine Learning */
    {
      topic: "Credit Scoring",
      projects: [
        // Example 1 project 
        {
          id: 1,
          title: 'Application Credit Scoring  Model',
          image: ApplicationScoreCard, // Add your image path here
          description: 'Developed a predictive model that assesses creditworthiness using alternative data sources and behavioral patterns, enabling financial inclusion for underserved populations with 85%+ accuracy.',
          technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Flask', 'Docker'],
          features: [
            'Reduced default prediction errors by 32% compared to traditional models',
            'Incorporated 15+ non-traditional credit indicators',
            'Developed explainable AI dashboard for regulatory compliance',
            'Deployed as microservice API with 200ms response time'
          ],
          lessons: 'Learned the importance of feature engineering and model interpretability in financial applications.',
          useCase: 'Ideal for fintech applications, risk assessment, and credit scoring systems.',
        },
        // Example 2 project
         {
          id: 2,
          title: 'Behavioral Credit Scoring  Model',
          image:Behavioral_credit_scoring, // Add your image path here
          description: 'Built a model to predict customer churn with 90% accuracy, helping businesses retain valuable customers through targeted interventions.',
          technologies: ['Python', 'XGBoost', 'Pandas', 'FastAPI', 'AWS Lambda'],
          features: [
            'Identified key churn indicators with SHAP value analysis',
            'Integrated with CRM systems for real-time predictions',
            'Achieved 92% precision in churn detection',
            'Reduced customer acquisition costs by 27%'
          ],
          lessons: 'Learned how to balance precision and recall in churn prediction models.',
          useCase: 'Ideal for SaaS companies, subscription services, and customer retention strategies.',
        }
      ]
    },

    //*3.Natural Language Processing */}
    {
      topic: "Natural Language Processing Projects",
      projects: [
        // Example 1 project 
        {
          id: 1,
          title: 'Sentiment Analysis Engine',
          image:Sentiment, // Add your image path here
          description: 'Developed a sentiment analysis engine that processes social media data to gauge public opinion on various topics.',
          technologies: ['Python', 'NLTK', 'TensorFlow', 'Flask'],
          features: [
            'Achieved 90% accuracy in sentiment classification',
            'Real-time processing of 100,000+ tweets per hour',
            'Integrated with visualization dashboard for insights'
          ],
          lessons: 'Learned the importance of data preprocessing and handling sarcasm in sentiment analysis.',
          useCase: 'Ideal for brand monitoring, market research, and social media analytics.',
        },
        // Example 2 project
         {
          id: 2,
          title: 'Chatbot for Customer Support',
          image:Chatbot, // Add your image path here
          description: 'Built an AI-powered chatbot that provides instant customer support and resolves common queries.',
          technologies: ['Python', 'Rasa', 'FastAPI', 'MongoDB'],
          features: [
            'Handles 80% of customer queries without human intervention',
            'Supports multi-language interactions',
            'Integrated with CRM for personalized responses'
          ],
          lessons: 'Learned how to design conversational flows and handle user intents effectively.',
          useCase: 'Ideal for e-commerce platforms, service industries, and customer support automation.',
        }
      ]
    }
  ];
  
 
 const getTechIcon = (tech) => {
  const icons = {
    'Python': { icon: 'fab fa-python', colorClass: 'text-blue-600' },
    'Java': { icon: 'fab fa-java', colorClass: 'text-blue-700' },
    'JavaScript': { icon: 'fab fa-js', colorClass: 'text-yellow-400' },
    'React': { icon: 'fab fa-react', colorClass: 'text-cyan-400' },
    'Node.js': { icon: 'fab fa-node-js', colorClass: 'text-green-600' },
    'AWS S3': { icon: 'fab fa-aws', colorClass: 'text-orange-500' },
    'Docker': { icon: 'fab fa-docker', colorClass: 'text-blue-500' },
    'Kubernetes': { icon: 'fas fa-ship', colorClass: 'text-blue-600' },
    'PostgreSQL': { icon: 'fas fa-database', colorClass: 'text-blue-700' },
    'MongoDB': { icon: 'fas fa-database', colorClass: 'text-green-500' },
    'TensorFlow': { icon: 'fas fa-brain', colorClass: 'text-orange-600' },
    'PyTorch': { icon: 'fas fa-brain', colorClass: 'text-red-500' },
    'Apache Kafka': { icon: 'fas fa-stream', colorClass: 'text-gray-900' },
    'Spark': { icon: 'fas fa-bolt', colorClass: 'text-orange-600' },
    'Airflow': { icon: 'fas fa-wind', colorClass: 'text-cyan-600' },
    'Flask': { icon: 'fas fa-flask', colorClass: 'text-black' },
    'FastAPI': { icon: 'fas fa-bolt', colorClass: 'text-teal-500' },
    'TypeScript': { icon: 'fas fa-code', colorClass: 'text-blue-600' },
    'GraphQL': { icon: 'fas fa-project-diagram', colorClass: 'text-pink-600' },
    'WebSockets': { icon: 'fas fa-plug', colorClass: 'text-gray-900' },
    'WebRTC': { icon: 'fas fa-video', colorClass: 'text-gray-700' },
    'Firebase': { icon: 'fas fa-fire', colorClass: 'text-yellow-400' },
    'Elasticsearch': { icon: 'fas fa-search', colorClass: 'text-blue-800' },
    'GPT-3': { icon: 'fas fa-robot', colorClass: 'text-emerald-500' },
    'BERT': { icon: 'fas fa-robot', colorClass: 'text-orange-400' },
    'XGBoost': { icon: 'fas fa-chart-line', colorClass: 'text-blue-600' },
    'Scikit-learn': { icon: 'fas fa-chart-line', colorClass: 'text-orange-500' },
    'Pandas': { icon: 'fas fa-table', colorClass: 'text-green-500' },
    'D3.js': { icon: 'fas fa-chart-bar', colorClass: 'text-yellow-500' },
    'Next.js': { icon: 'fab fa-js', colorClass: 'text-black' },
    'TailwindCSS': { icon: 'fas fa-palette', colorClass: 'text-teal-400' },
    'Stripe': { icon: 'fab fa-cc-stripe', colorClass: 'text-blue-500' },
    'Rasa': { icon: 'fas fa-comments', colorClass: 'text-purple-600' },
    'HuggingFace': { icon: 'fas fa-smile', colorClass: 'text-yellow-300' },
    'Spacy': { icon: 'fas fa-language', colorClass: 'text-blue-400' },
    'SageMaker': { icon: 'fab fa-aws', colorClass: 'text-orange-500' },
    'Twitter API': { icon: 'fab fa-twitter', colorClass: 'text-blue-400' },
    'MLflow': { icon: 'fas fa-project-diagram', colorClass: 'text-blue-500' },
    'Terraform': { icon: 'fas fa-code-branch', colorClass: 'text-purple-500' },
    'Delta Lake': { icon: 'fas fa-database', colorClass: 'text-blue-500' },
    'AWS Glue': { icon: 'fab fa-aws', colorClass: 'text-orange-500' },
    'PySpark': { icon: 'fas fa-bolt', colorClass: 'text-orange-600' },
    'Debezium': { icon: 'fas fa-exchange-alt', colorClass: 'text-pink-600' },
    'Snowflake': { icon: 'fas fa-snowflake', colorClass: 'text-blue-400' },
    'Kafka Connect': { icon: 'fas fa-plug', colorClass: 'text-gray-900' },
    'Plotly': { icon: 'fas fa-chart-line', colorClass: 'text-blue-800' },
    'Neural Networks': { icon: 'fas fa-network-wired', colorClass: 'text-orange-600' },
    'GitHub': { icon: 'fab fa-github', colorClass: 'text-gray-800' },
    'Redis': { icon: 'fas fa-memory', colorClass: 'text-red-600' },
    'Canvas API': { icon: 'fas fa-paint-brush', colorClass: 'text-blue-600' },
    'CRM': { icon: 'fas fa-users', colorClass: 'text-indigo-500' },
    'Prometheus': { icon: 'fas fa-chart-line', colorClass: 'text-orange-600' },
    '_default': { icon: 'fas fa-code', colorClass: 'text-green-500' }
  };
  
  return icons[tech] || icons['_default'];
};
  
  
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Machine Learning Projects</h1>
        
        {data.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4  items-center"><span class="gradient-text">{category.topic}</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {category.projects.map((project) => (
                <div key={project.id} className="project-card bg-white rounded-lg shadow-lg p-6">
                  <img src={project.image} alt={project.title} className="w-full object-contain rounded mb-4 transition-transform duration-500 hover:scale-105"/>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 class="font-semibold text-gray-700 mb-2">Tools & Frameworks:</h4>
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
                        );})}
                  </div>
                  <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside mb-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600">{feature}</li>
                    ))}
                  </ul>
                  <h4 class="font-semibold text-gray-700 mb-2">Lessons Learned:</h4>
                  <p className="text-gray-600 italic mb-4">{project.lessons}</p>
                  <h4 class="font-semibold text-gray-700 mb-2">Use Case:</h4>
                  <p className="text-gray-600">{project.useCase}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
    </section>
   
  )
}

export default MachineLearning