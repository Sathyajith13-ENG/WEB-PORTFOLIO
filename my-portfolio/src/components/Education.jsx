import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const educationList = [
  {
    degree: "B.E. Computer Science Engineering",
    institution: "Dhanalakshmi Srinivasan College of Engineering and Technology, Mamallapuram",
    period: "Graduated: 2026",
    grade: "Percentage: 75%",
  },
  {
    degree: "Higher Secondary Education (HSC)",
    institution: "CSI Higher Secondary School, Nagapattinam",
    period: "2020 – 2022",
    grade: "Percentage: 66.33%",
  },
];

const Education = () => {
  return (
    <div className="education-section mt-12">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <FaGraduationCap className="text-lime-400" />
        Education
      </h2>

      <div className="space-y-4">
        {educationList.map((edu, idx) => (
          <div
            key={idx}
            className="bg-gray-800/90 border border-gray-700/80 rounded-xl p-6 shadow-md transition-all duration-300 hover:border-lime-500/40 hover:shadow-lg hover:shadow-lime-500/5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {edu.degree}
                </h3>
                <p className="text-gray-300 text-sm mt-1">
                  {edu.institution}
                </p>
              </div>
              <div className="sm:text-right">
                <span className="inline-block text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full font-mono border border-gray-600">
                  {edu.period}
                </span>
                <div className="text-sm font-semibold text-lime-400 mt-1 font-mono">
                  {edu.grade}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
