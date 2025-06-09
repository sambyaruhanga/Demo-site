import React from 'react'


   

const About = () => {
    const baseYear = 2018; // When your ML/Data Science journey began
    const currentYear = new Date().getFullYear();
    const yearsExperience = currentYear - baseYear;
  return (
    <section id="about" class="py-5 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">About <span class="gradient-text">Me</span></h2>
                <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            </div>
            
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/3 mb-10 md:mb-0 flex justify-center">
                    <div class="relative">
                        {/* Blue Card*/}
                        <div class="w-64 min-h-[18rem] md:w-96 md:min-h-[36rem] bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-xl"></div>
                        <div class="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg">
                            <div class="flex items-center">
                                {/* Experience budge*/}
                                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    <i class="fas fa-medal text-xl"></i>
                                </div>
                                {/* Experience Number*/}
                                <div class="ml-3">
                                    <p class="font-bold"><span className="font-bold">{yearsExperience}+</span> Years</p>
                                    <p class="text-sm text-gray-600">Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="md:w-2/3 md:pl-12">
                    <h3 class="text-2xl md:text-3xl font-semibold text-gray-600 mb-6">Data Scientist & Full-Stack Developer</h3>
                    <p class="text-xl text-gray-600 mb-6">
                        I'm a Full-Stack Developer and Data Scientist passionate about transforming raw data into intelligent, scalable solutions. With extensive expertise in Machine Learning, Artificial Intelligence, and modern web technologies, I connect powerful analytics with seamless user experiences, creating data-driven applications from back end to front end.
                    </p>
                    <p class="text-xl text-gray-600 mb-6">
                        Over the past <span className="font-bold">{yearsExperience}+</span> years, I've worked on numerous data science projects, from predictive modeling to natural language processing. My journey into web development began as a way to showcase my data science work, but quickly grew into a passion for creating exceptional digital experiences.
                    </p>
                    <p class="text-xl text-gray-600 mb-8">
                        When I'm not coding, you can find me reading books, listening to music, traveling, working out at the gym, or mentoring aspiring data scientists.
                    </p>
                    
                    <div class="grid grid-cols-2 gap-6 mb-8">
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                                <i class="fas fa-brain"></i>
                            </div>
                            <div>
                                <p class="text-xl font-semibold">Machine Learning</p>
                                <p class="text-gray-600">AI Models</p>
                            </div>
                        </div>
                        {/* icons */}
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-4">
                                <i class="fas fa-chart-bar"></i>
                            </div>
                            <div>
                                <p class="text-xl font-semibold">Data Analysis</p>
                                <p class="text-gray-600">Visualization</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4">
                                <i class="fas fa-code"></i>
                            </div>
                            <div>
                                <p class="text-xl font-semibold">Web</p>
                                <p class="text-gray-600">Development</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mr-4">
                                <i class="fas fa-project-diagram"></i>
                            </div>
                            <div>
                                <p class="text-xl font-semibold">Full Stack</p>
                                <p class="text-gray-600">Solutions</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* <a href="#" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                        Download CV
                        <i class="fas fa-download ml-2"></i>
                    </a> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default About