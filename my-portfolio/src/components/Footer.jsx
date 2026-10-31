import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaFileAlt } from 'react-icons/fa';
import resumePdf from '../resume/my resume.pdf';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 pt-8 pb-10 border-t border-gray-800 text-gray-400 text-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white font-semibold text-base">Sathyajith K</p>
          <p className="text-xs text-lime-400/90 mt-0.5">
            Python Developer | Machine Learning · NLP · Flask · Streamlit
          </p>
        </div>

        <div className="flex items-center gap-4 text-gray-400">
          <a
            href="https://www.linkedin.com/in/sathyajith1322"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-400 transition-colors"
            title="LinkedIn Profile"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/Sathyajith13-ENG"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            title="GitHub Profile"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="mailto:sathyajithkannanv@gmail.com"
            className="hover:text-lime-400 transition-colors"
            title="Send Email"
          >
            <FaEnvelope size={18} />
          </a>
          <a
            href="tel:+919159042060"
            className="hover:text-lime-400 transition-colors"
            title="Call"
          >
            <FaPhoneAlt size={16} />
          </a>
          <a
            href={resumePdf}
            download="Sathyajith_K_Resume.pdf"
            className="hover:text-white transition-colors text-xs font-mono font-medium px-2.5 py-1 rounded bg-gray-800/80 border border-gray-700/80 hover:border-lime-400/60 flex items-center gap-1.5"
            title="Download Résumé"
          >
            <FaFileAlt size={12} className="text-lime-400" />
            <span>Résumé</span>
          </a>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-800/60 text-center text-xs text-gray-500">
        <p>© {year} Sathyajith K. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
