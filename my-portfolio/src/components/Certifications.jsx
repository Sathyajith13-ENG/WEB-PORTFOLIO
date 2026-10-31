import React from 'react';
import { FaAward, FaCheckCircle, FaBrain, FaChartBar, FaCode } from 'react-icons/fa';
import { SiKaggle, SiPython, SiScikitlearn } from 'react-icons/si';

const certificationsList = [
  {
    title: "Kaggle - Intro to Machine Learning",
    issuer: "Kaggle",
    icon: SiScikitlearn,
    iconColor: "#f97316",
    badgeColor: "border-lime-500/50 text-lime-400 bg-lime-950/40",
    description:
      "Completed a hands-on machine learning course covering supervised learning, model training, validation techniques, and predictive modeling using Python and Scikit-learn.",
    skills: ["Supervised Learning", "Model Training", "Model Validation", "Predictive Modeling", "Scikit-learn"],
  },
  {
    title: "Kaggle - Python Course",
    issuer: "Kaggle",
    icon: SiPython,
    iconColor: "#38bdf8",
    badgeColor: "border-lime-500/50 text-lime-400 bg-lime-950/40",
    description:
      "Completed a hands-on Python programming course covering Python fundamentals, functions, data structures, and core programming concepts for data science.",
    skills: ["Python Fundamentals", "Functions & Loops", "Data Structures", "Libraries & Syntax"],
  },
];

const competencies = [
  {
    icon: FaBrain,
    title: "Machine Learning & NLP",
    description: "Classification pipelines, text preprocessing, sentiment categorization, and Scikit-learn modeling.",
  },
  {
    icon: FaChartBar,
    title: "Data Analysis & EDA",
    description: "Data exploration, cleaning, transformation, and visual reporting using Pandas.",
  },
  {
    icon: FaCode,
    title: "ML Web Deployment",
    description: "Building interactive web dashboards and prediction APIs using Flask, Streamlit, and modern web UI.",
  },
];

const Certifications = () => {
  return (
    <div className="certifications-section mt-12">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <FaAward className="text-lime-400" />
        Certifications & Key Competencies
      </h2>

      {/* Kaggle Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        {certificationsList.map((cert, index) => {
          const Icon = cert.icon;
          return (
            <div
              key={index}
              className="relative group rounded-xl p-6 bg-gradient-to-b from-gray-800/90 to-gray-900/90 border border-gray-700/80 hover:border-lime-400/60 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lime-500/10"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-lime-400/40 to-transparent group-hover:via-lime-400 transition-all duration-300" />

              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-gray-800 border border-gray-700/80 group-hover:border-lime-400/40 transition-colors">
                    <Icon size={24} style={{ color: cert.iconColor }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-lime-300 transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono mt-0.5">
                      <SiKaggle className="text-sky-400" size={13} />
                      <span>{cert.issuer}</span>
                    </div>
                  </div>
                </div>

                <span className={`inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${cert.badgeColor}`}>
                  <FaCheckCircle size={10} />
                  Verified
                </span>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-700/60">
                {cert.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-lime-950/40 border border-lime-800/60 text-lime-300 text-xs px-2.5 py-0.5 rounded font-mono font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Core Competencies Strip */}
      <div className="bg-gray-800/80 border border-gray-700/70 rounded-xl p-5">
        <h4 className="text-xs font-mono uppercase tracking-wider text-lime-400 font-semibold mb-4">
          Core Technical Competencies
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {competencies.map((comp, idx) => {
            const CompIcon = comp.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/60 border border-gray-700/60 hover:border-lime-500/40 transition-all"
              >
                <div className="p-2 rounded-md bg-lime-950/50 border border-lime-800/50 text-lime-400 shrink-0">
                  <CompIcon size={16} />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-white mb-1">
                    {comp.title}
                  </h5>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Certifications;

