import React, { useState } from 'react';
import {
  FaGithub,
  FaGitAlt,
  FaBrain,
  FaChartLine,
} from 'react-icons/fa';
import {
  SiPython,
  SiScikitlearn,
  SiTensorflow,
  SiPandas,
  SiFlask,
  SiStreamlit,
  SiMysql,
  SiHtml5,
  SiKaggle,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbSql } from 'react-icons/tb';

const TechBadgeToggle = () => {
  const [showList, setShowList] = useState(false);

  const techStack = [
    { name: 'Python', icon: SiPython, color: '#38bdf8' },
    { name: 'Machine Learning', icon: FaBrain, color: '#a3e635' },
    { name: 'NLP', icon: FaBrain, color: '#84cc16' },
    { name: 'Scikit-learn', icon: SiScikitlearn, color: '#f97316' },
    { name: 'TensorFlow', icon: SiTensorflow, color: '#ea580c' },
    { name: 'Pandas', icon: SiPandas, color: '#3b82f6' },
    { name: 'Flask', icon: SiFlask, color: '#f8fafc' },
    { name: 'Streamlit', icon: SiStreamlit, color: '#ff4b4b' },
    { name: 'Data Analysis', icon: FaChartLine, color: '#a3e635' },
    { name: 'MySQL', icon: SiMysql, color: '#0ea5e9' },
    { name: 'SQL', icon: TbSql, color: '#14b8a6' },
    { name: 'Kaggle', icon: SiKaggle, color: '#20beff' },
    { name: 'Git', icon: FaGitAlt, color: '#fb923c' },
    { name: 'GitHub', icon: FaGithub, color: '#94a3b8' },
    { name: 'VS Code', icon: VscVscode, color: '#38bdf8' },
    { name: 'HTML5 & CSS3', icon: SiHtml5, color: '#ea580c' },
  ];

  return (
    <div className="text-white mt-8">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs uppercase font-mono tracking-wider text-lime-400 font-semibold">
          Core Technologies & Stack
        </span>
        <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-300 hover:text-white select-none">
          <input
            type="checkbox"
            checked={showList}
            onChange={() => setShowList(!showList)}
            className="rounded bg-gray-800 border-gray-700 text-lime-500 focus:ring-0 cursor-pointer accent-lime-500"
          />
          <span className="font-medium text-xs font-mono">Show as Grid</span>
        </label>
      </div>

      {showList ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
          {techStack.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg border backdrop-blur-sm text-gray-100 text-sm font-medium transition-all duration-300 hover:scale-105 hover:border-lime-400/50 cursor-default"
              style={{
                backgroundColor: `${tech.color}15`,
                borderColor: `${tech.color}40`,
                boxShadow: `0 2px 8px ${tech.color}15`
              }}
            >
              <tech.icon size={18} style={{ color: tech.color }} className="shrink-0" />
              <span className="truncate">{tech.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative overflow-hidden w-full py-1">
          <div className="flex w-max animate-slide hover:[animation-play-state:paused]">
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3.5 py-1.5 mx-1.5 rounded-full border backdrop-blur-sm text-gray-100 text-sm whitespace-nowrap shrink-0 font-medium transition-all duration-300 hover:scale-105 hover:border-lime-400/60 cursor-default"
                style={{
                  backgroundColor: `${tech.color}15`,
                  borderColor: `${tech.color}40`,
                  boxShadow: `0 2px 8px ${tech.color}15`
                }}
              >
                <tech.icon size={16} style={{ color: tech.color }} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechBadgeToggle;
