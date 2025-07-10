import React from 'react'

const Skills = () => {

//     const SkillProgress = ({ skill, percentage }) => {
//   return (
//     <div className="mb-6">
//       <div className="flex justify-between mb-1">
//         <span className="text-lg font-medium text-gray-900">{skill}</span>
//         <span className="text-lg font-medium text-blue-600">{percentage}%</span>
//       </div>
//       <div className="w-full bg-gray-200 rounded-full h-2.5">
//         <div
//           className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
//           style={{ width: `${percentage}%` }}
//         ></div>
//       </div>
//     </div>
//   );
// };

const SkillProgress = ({ skill, percentage, color }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-lg font-medium text-gray-900">{skill}</span>
        <span className="text-lg font-medium" style={{ color: color }}>
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

  return (
<section id="skills" class="py-5 bg-gray-50">
<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">My <span class="gradient-text">Skills</span></h2>
            <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
    </div>
    <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
        {/* Python */}
        <div class="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-3">
                <i class="fab fa-python text-3xl"></i>
            </div>
                <span class="font-medium">Python</span>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-3">
                <i class="fas fa-brain text-3xl"></i>
            </div>
                <span class="font-medium">TensorFlow</span>
        </div>

        {/* R */}
        <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-3">
            {/* Use a fallback icon since Font Awesome doesn't include an R icon */}
            <i className="fas fa-code text-xl"></i> {/* Fallback icon */}
            </div>
            <span className="font-medium">R</span>
        </div>
        
        {/* Python */}
        <div class="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center">
            <div class="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 mb-3">
                <i class="fas fa-project-diagram text-3xl"></i>
            </div>
            <span class="font-medium">Scikit-learn</span>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Data Science Skills */}
        <div class="bg-white p-8 rounded-xl shadow-sm">
            <div class="grid">
                <div class="flex items-center mb-6">
                    
                    <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                        <i class="fas fa-brain"></i>
                    </div>
                    <h3 class="text-xl font-bold">Data Science</h3>
                </div>
                <div class="grid items-center mb-6">
                   <SkillProgress skill="Programming Languages: Python, R & SQL" percentage={95} color="#2563eb"  />
                    <SkillProgress skill="ML Frames: TensorFlow, PyTorch" percentage={85} color="#2563eb" />
                    <SkillProgress skill="Visualization Tools: Tableau,Power BI" percentage={90} color="#2563eb" />
                    <SkillProgress skill="Cloud & Big Data:AWS SageMaker & Spark" percentage={75} color="#2563eb" />
                    <SkillProgress skill="Statistics" percentage={80} color="#2563eb" />
                </div>
            </div>
        </div>
        {/* Web Development */}
        <div class="bg-white p-8 rounded-xl shadow-sm">
            <div class="grid">
                <div class="flex items-center mb-6">
                    <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-4">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3 class="text-xl font-bold">Web Development </h3>
                </div>
                <div class="grid items-center mb-6">
                    <SkillProgress skill="HTML/CSS" percentage={95} color="#9333ea" />
                   <SkillProgress skill="JavaScript" percentage={95} color="#9333ea"/>
                    <SkillProgress skill="React" percentage={85} color="#9333ea"/>
                    <SkillProgress skill="Node.js" percentage={90} color="#9333ea"/>
                </div>
            </div>
        </div>
        
    </div>
  
</div>


</section>
  )
}

export default Skills

