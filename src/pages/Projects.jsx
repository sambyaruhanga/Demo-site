import React from 'react'
import creditScoring from '../assets/images/creditScoring.png'

const Projects = () => {

return(
   <section id="projects" class="py-5 bg-gray-50">
    <div class="grid place-items-center space-x-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 gap-4">
        <div class="">
            <h2 class="text-3xl md:text-4xl font-bold mb-4  items-center">My <span class="gradient-text">Projects</span></h2>
        </div>
        
        
    </div>
    {/* <div class="mt-12  flex justify-center  grid-cols-2 md:grid-cols-4 gap-4 p-8"> */}
    <div class="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 p-10">
         {/* Project Summary */}

         <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col space-y-4 items-center max-w-md mx-auto hover:shadow-lg transition-shadow duration-300">
                <img
                    src={creditScoring}
                    alt="Credit Scoring Dashboard"
                    className="w-full h-48 object-contain rounded-md"
                />

                <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-800 leading-snug">
                    Credit Scoring Behavioral Model
                    </h3>
                    <span className="mt-2 inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Machine Learning
                    </span>
                </div>

                <p className="text-gray-600 text-sm text-center">
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
            </div>

   
         {/* Project Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col space-y-4 items-center max-w-md mx-auto hover:shadow-lg transition-shadow duration-300">
                <img
                    src={creditScoring}
                    alt="Credit Scoring Dashboard"
                    className="w-full h-48 object-contain rounded-md"
                />

                <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-800 leading-snug">
                    Credit Scoring Behavioral Model
                    </h3>
                    <span className="mt-2 inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Machine Learning
                    </span>
                </div>

                <p className="text-gray-600 text-sm text-center">
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
            </div>
                {/* Project Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col space-y-4 items-center max-w-md mx-auto hover:shadow-lg transition-shadow duration-300">
                <img
                    src={creditScoring}
                    alt="Credit Scoring Dashboard"
                    className="w-full h-48 object-contain rounded-md"
                />

                <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-800 leading-snug">
                    Credit Scoring Behavioral Model
                    </h3>
                    <span className="mt-2 inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Machine Learning
                    </span>
                </div>

                <p className="text-gray-600 text-sm text-center">
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
            </div>
    </div>

   </section>
)
};
export default Projects;



