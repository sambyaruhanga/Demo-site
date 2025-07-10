
import React from 'react';
import Reat_vite from '../assets/images/React_vite.png'
import MLCreditScoring from'../assets/images/MLCreditScoring.png'
import mlLifeCycle from '../assets/images/ML-life-cycle.webp'

const Posts = () => {
  return (
   <section id="Posts" class="py-5 bg-gray-50 w-full h-full mx-auto px-4 sm:px-6 lg:px-8">
        <div class="w-full h-full mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4 ">My <span class="gradient-text">Blog</span></h2>
                <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
                <p class="text-2xl text-gray-600 max-w-2xl mx-auto mt-4">Sharing my knowledge and experiences in Data Science and Web Development</p>
            </div>
            
           <div class="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:p-8">
            {/* Post one */}
             <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group">
                   {/* Image Header */}
                    <div className="h-52 bg-gray-200 overflow-hidden">
                    <img src={Reat_vite} 
                    alt="React + Vite"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    </div>
                    {/* Card Content */}
                    <div className="p-6 space-y-4">
                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center text-sm text-gray-500 gap-x-3 gap-y-1">
                    <span>📅 June 15, 2025</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full text-xs font-medium">Vite</span>
                    <span className="bg-green-50 text-green-600 px-2 py-0.5 rounded-full text-xs font-medium">React</span>
                    <span className="bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full text-xs font-medium">Tailwind CSS</span>
                    </div>
                     {/* Title */}
                    <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      Why I Built My Website as a Data Scientist
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                    I created my website to showcase my portfolio as a data scientist and web developer. It serves as a hub for my projects, skills, blog posts, and contact info — helping collaborators, employers, and clients easily understand what I do and how I work.
                    </p>
                    <p className="font-semibold text-gray-600 italic mb-4">
                      You need a website like this? Let’s connect and discuss.
                    </p>
                    </div>
             </div>
            {/* Post Two */}
             <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group">
                   {/* Image Header */}
                    <div className="h-52 bg-gray-200 overflow-hidden">
                    <img src={MLCreditScoring} 
                    alt="React + Vite"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    </div>
                    {/* Card Content */}
                    <div className="p-6 space-y-4">
                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center text-sm text-gray-500 gap-x-3 gap-y-1">
                    <span>📅 July 14, 2025</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full text-xs font-medium">Python</span>
                    <span className="bg-green-50 text-green-600 px-2 py-0.5 rounded-full text-xs font-medium">XGBoost</span>
                    <span className="bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full text-xs font-medium">Docker</span>
                    </div>
                     {/* Title */}
                    <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      ML-based credit scoring
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                    In traditional banking, credit scoring relied heavily on static rules and manual reviews. But today, with the rise of big data and AI, machine learning (ML) is reshaping how financial institutions assess creditworthiness.
                    </p>
                    <p className="font-semibold text-gray-600 italic mb-4">
                      You have questions or thoughts on building ML credit models? Let’s connect and discuss.
                    </p>
                    </div>
             </div>

            {/* Post 3 */}
             <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group">
                   {/* Image Header */}
                    <div className="h-52 bg-gray-200 overflow-hidden">
                    <img src={mlLifeCycle} 
                    alt="React + Vite"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    </div>
                    {/* Card Content */}
                    <div className="p-6 space-y-4">
                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center text-sm text-gray-500 gap-x-3 gap-y-1">
                    <span>📅 August 08, 2025</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full text-xs font-medium">Python</span>
                    <span className="bg-green-50 text-green-600 px-2 py-0.5 rounded-full text-xs font-medium">TensorFlow/PyTorch</span>
                    <span className="bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full text-xs font-medium">AWS SageMaker</span>
                    </div>
                     {/* Title */}
                    <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      Machine Learning Project Life Cycle
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                    The ML project life cycle is a structured process that starts with problem definition, followed by data collection, preprocessing, analysis, modeling, evaluation, and deployment, and ends with continuous monitoring and improvement.
                    </p>
                    <p className="font-semibold text-gray-600 italic mb-4">
                      Are you interested in building an end-to-end ML project? Let’s connect and discuss.
                    </p>
                    </div>
             </div>
             
          </div>
        </div>
  </section>
  );
};

export default Posts;

