import React, { useState } from 'react';
import profile from '../images/IMG_20261031_124406.png';
import resumePdf from '../resume/my resume.pdf';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaFileAlt,
  FaTools,
} from 'react-icons/fa';
import qaData from '../data/qaData';
import TechBadgeToggle from './TechBadgeToggle';
import Certifications from './Certifications';
import Projects from './Projects';
import Education from './Education';
import Footer from './Footer';

const skillTabs = ['All', 'Python & ML', 'Data & Analytics', 'Frameworks', 'Databases & Tools'];

const Header = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = qaData.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <div className='bg-gray-900 text-white w-full min-h-screen px-4 pb-10'>
      <div className='max-w-5xl pt-8 lg:pt-14 mx-auto'>

        {/* Hero / Profile Section */}
        <div className="profile">
          <div className='profile-img flex items-start justify-between'>
            <div className="relative">
              <img
                src={profile}
                alt="Sathyajith K"
                className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-full border-4 border-gray-800 ring-2 ring-lime-400/50 shadow-xl shadow-lime-500/10"
              />
              <span className="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-lime-400 border-2 border-gray-900" title="Available for opportunities" />
            </div>
          </div>

          <div className="name text-3xl md:text-4xl font-bold font-sans mt-5 tracking-tight text-white flex items-center gap-3">
            <span>Sathyajith K</span>
          </div>

          <div className="role font-medium text-lime-400 text-lg md:text-xl mt-1 tracking-wide">
            Python Developer | Machine Learning · NLP · Flask · Streamlit
          </div>

          {/* Professional Summary */}
          <div className='about mt-4 text-gray-300 leading-relaxed max-w-4xl text-sm md:text-base'>
            Computer Science Engineering graduate with strong knowledge of Python programming, machine learning, natural language processing, data analysis, and web application development. Hands-on experience building Python-based projects using Scikit-learn, Pandas, TensorFlow, Flask, and Streamlit. Seeking an entry-level Python Developer role to apply programming, problem-solving, and software development skills in a professional environment.
          </div>

          {/* Contact Details */}
          <div className="contact-info mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-lime-400 shrink-0" />
              <span>Nagapattinam, Tamil Nadu</span>
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-lime-400 shrink-0" />
              <a href="tel:+919159042060" className="hover:text-lime-300 transition-colors">
                +91-9159042060
              </a>
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-lime-400 shrink-0" />
              <a href="mailto:sathyajithkannanv@gmail.com" className="text-lime-400 hover:text-lime-300 hover:underline">
                sathyajithkannanv@gmail.com
              </a>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="cta-buttons mt-5 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/sathyajith1322"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md flex items-center gap-2 text-sm transition-colors shadow-sm"
            >
              <FaLinkedin size={18} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Sathyajith13-ENG"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-lime-500/60 text-white font-medium py-2 px-4 rounded-md flex items-center gap-2 text-sm transition-colors shadow-sm"
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </a>

            <a
              href={resumePdf}
              download="Sathyajith_K_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lime-500 hover:bg-lime-400 text-gray-950 font-semibold py-2 px-4 rounded-md text-sm transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <FaFileAlt size={15} />
              <span>Download Résumé</span>
            </a>
          </div>

          <hr className='mt-10 border-gray-800' />
        </div>

        {/* Technical Skills Section */}
        <div className="skills-section mt-10">
          <div className="flex items-center gap-2 mb-6">
            <FaTools className="text-lime-400" />
            <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
          </div>

          {/* Skill Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {skillTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === tab
                    ? 'bg-lime-500 text-gray-950 font-bold shadow-md shadow-lime-500/25 border border-lime-400'
                    : 'bg-gray-800/80 text-gray-300 hover:text-white hover:bg-gray-700/80 border border-gray-700/60'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((item, index) => (
              <div
                key={index}
                className="relative group rounded-xl p-5 shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 bg-gradient-to-b from-gray-800/90 to-gray-900/90 border border-gray-700/80 hover:border-lime-500/50 hover:shadow-lg hover:shadow-lime-500/5"
              >
                {/* Top glowing sheen */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-lime-400/40 to-transparent group-hover:via-lime-400 transition-all duration-300" />

                <div>
                  <div className="text-[11px] uppercase font-mono tracking-wider font-semibold text-lime-400 mb-1.5">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-lime-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300/90 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-lime-950/40 border border-lime-800/60 text-lime-300 text-xs px-2.5 py-1 rounded-md font-mono font-medium hover:border-lime-500 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-gray-700/50">
                  {item.icons.map(({ icon: Icon, color, title }, i) => (
                    <Icon
                      key={i}
                      size={20}
                      style={{ color: color || undefined }}
                      title={title}
                      className="hover:scale-125 transition-transform duration-200 cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <TechBadgeToggle />
        </div>

        <hr className='mt-12 border-gray-800' />

        {/* Projects Section */}
        <Projects />

        <hr className='mt-12 border-gray-800' />

        {/* Certifications & Key Competencies Section */}
        <Certifications />

        <hr className='mt-12 border-gray-800' />

        {/* Education Section */}
        <Education />

        {/* Footer Section */}
        <Footer />

      </div>
    </div>
  );
};

export default Header;
