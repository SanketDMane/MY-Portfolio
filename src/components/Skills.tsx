import React from 'react';
import { Code, Globe, Database, Cloud, Cpu, Github as Git } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  color: string;
  darkColor: string;
  bgColor: string;
  darkBgColor: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ 
  title, 
  skills, 
  icon, 
  color, 
  darkColor, 
  bgColor, 
  darkBgColor 
}) => {
  return (
    <div className={`rounded-xl p-6 shadow-md ${bgColor} ${darkBgColor} transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1`}>
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-lg ${color} ${darkColor} bg-opacity-20 dark:bg-opacity-30`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className={`px-3 py-1 rounded-md text-sm font-medium ${color} ${darkColor} bg-opacity-10 dark:bg-opacity-20`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="text-blue-600 dark:text-blue-400" size={24} />,
      skills: ['C++', 'Core Java', 'JavaScript', 'SQL'],
      color: 'text-blue-700',
      darkColor: 'dark:text-blue-300',
      bgColor: 'bg-blue-50',
      darkBgColor: 'dark:bg-blue-900/20'
    },
    {
      title: 'Frontend',
      icon: <Globe className="text-indigo-600 dark:text-indigo-400" size={24} />,
      skills: ['ReactJS', 'HTML', 'CSS', 'Tailwind CSS', 'React Native'],
      color: 'text-indigo-700',
      darkColor: 'dark:text-indigo-300',
      bgColor: 'bg-indigo-50',
      darkBgColor: 'dark:bg-indigo-900/20'
    },
    {
      title: 'Backend',
      icon: <Database className="text-green-600 dark:text-green-400" size={24} />,
      skills: ['Express.js', 'Firebase', 'MongoDB', 'MySQL'],
      color: 'text-green-700',
      darkColor: 'dark:text-green-300',
      bgColor: 'bg-green-50',
      darkBgColor: 'dark:bg-green-900/20'
    },
    {
      title: 'Cloud',
      icon: <Cloud className="text-orange-600 dark:text-orange-400" size={24} />,
      skills: ['AWS'],
      color: 'text-orange-700',
      darkColor: 'dark:text-orange-300',
      bgColor: 'bg-orange-50',
      darkBgColor: 'dark:bg-orange-900/20'
    },
    {
      title: 'ML/AI',
      icon: <Cpu className="text-purple-600 dark:text-purple-400" size={24} />,
      skills: ['TensorFlow', 'Scikit-learn', 'Computer Vision', 'NLP'],
      color: 'text-purple-700',
      darkColor: 'dark:text-purple-300',
      bgColor: 'bg-purple-50',
      darkBgColor: 'dark:bg-purple-900/20'
    },
    {
      title: 'Tools',
      icon: <Git className="text-red-600 dark:text-red-400" size={24} />,
      skills: ['Git', 'GitHub', 'VS Code', 'Basic Docker & K8S'],
      color: 'text-red-700',
      darkColor: 'dark:text-red-300',
      bgColor: 'bg-red-50',
      darkBgColor: 'dark:bg-red-900/20'
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="My Skills" subtitle="Technologies I work with" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              color={category.color}
              darkColor={category.darkColor}
              bgColor={category.bgColor}
              darkBgColor={category.darkBgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;