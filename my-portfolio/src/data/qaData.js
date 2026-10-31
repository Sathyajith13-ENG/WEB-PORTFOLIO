import {
  FaGithub,
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
  SiGit,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbSql } from 'react-icons/tb';

const qaData = [
  {
    category: "Python & ML",
    title: "Python & Machine Learning",
    description: "Core Python programming with hands-on expertise building supervised learning models and classification pipelines.",
    skills: ["Python", "Machine Learning", "Scikit-learn", "Model Evaluation"],
    icons: [
      { icon: SiPython, color: '#38bdf8', title: 'Python' },
      { icon: SiScikitlearn, color: '#f97316', title: 'Scikit-learn' },
      { icon: FaBrain, color: '#a3e635', title: 'Machine Learning' }
    ],
  },
  {
    category: "Python & ML",
    title: "Natural Language Processing (NLP)",
    description: "End-to-end NLP pipelines: text preprocessing, feature extraction, TF-IDF vectorization, and sentiment classification.",
    skills: ["NLP", "Text Preprocessing", "Feature Extraction", "Sentiment Analysis"],
    icons: [
      { icon: FaBrain, color: '#a3e635', title: 'NLP' },
      { icon: SiScikitlearn, color: '#f97316', title: 'Classification Models' },
      { icon: SiPython, color: '#38bdf8', title: 'Python Text Processing' }
    ],
  },
  {
    category: "Python & ML",
    title: "Deep Learning & Forecasting",
    description: "TensorFlow-based predictive modeling for pattern recognition, crime forecasting, and multi-parameter analysis.",
    skills: ["TensorFlow", "Deep Learning", "Pattern Recognition", "Predictive Analytics"],
    icons: [
      { icon: SiTensorflow, color: '#ea580c', title: 'TensorFlow' },
      { icon: FaChartLine, color: '#a3e635', title: 'Predictive Analytics' }
    ],
  },
  {
    category: "Data & Analytics",
    title: "Data Processing & Visualization",
    description: "Data manipulation, dataset aggregation, statistical exploration, and interactive visual reporting using Pandas.",
    skills: ["Pandas", "Data Cleaning", "Data Analysis", "Data Visualization"],
    icons: [
      { icon: SiPandas, color: '#150458', title: 'Pandas' },
      { icon: FaChartLine, color: '#38bdf8', title: 'Data Visualization' }
    ],
  },
  {
    category: "Frameworks",
    title: "Web Application Frameworks",
    description: "Building interactive ML web applications, dashboards, and RESTful prediction endpoints using Flask and Streamlit.",
    skills: ["Flask", "Streamlit", "HTML5", "CSS3", "REST APIs"],
    icons: [
      { icon: SiFlask, color: '#f8fafc', title: 'Flask' },
      { icon: SiStreamlit, color: '#ff4b4b', title: 'Streamlit' },
      { icon: SiHtml5, color: '#e34f26', title: 'HTML5' },
      { icon: SiCss3, color: '#1572b6', title: 'CSS3' }
    ],
  },
  {
    category: "Databases & Tools",
    title: "Relational Databases & SQL",
    description: "Relational database modeling, SQL querying, schema structuring, and persistent storage integration with MySQL.",
    skills: ["MySQL", "SQL Queries", "Database Design", "CRUD Operations"],
    icons: [
      { icon: SiMysql, color: '#38bdf8', title: 'MySQL' },
      { icon: TbSql, color: '#a3e635', title: 'SQL' }
    ],
  },
  {
    category: "Databases & Tools",
    title: "Developer Tools & Version Control",
    description: "Version control workflows, collaborative code repository hosting with Git/GitHub, and development in VS Code.",
    skills: ["Git", "GitHub", "VS Code"],
    icons: [
      { icon: SiGit, color: '#f97316', title: 'Git' },
      { icon: FaGithub, color: '#f8fafc', title: 'GitHub' },
      { icon: VscVscode, color: '#38bdf8', title: 'VS Code' }
    ],
  }
];

export default qaData;
