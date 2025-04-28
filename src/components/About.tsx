import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="Get to know more about my journey" />
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-md mb-8 transform transition-all duration-500 hover:shadow-lg">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate developer with hands-on experience in full-stack development, machine learning, and cloud computing. 
              I love solving real-world problems through innovative tech solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I've won multiple national-level hackathons and developed impactful projects in Frontend , Backend. 
              Currently pursuing B.Tech in Computer Engineering at MIT Academy of Engineering, Alandi with a CGPA of 8.72.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-lg">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">Education</h3>
              </div>
              <ul className="space-y-3">
                <li className="text-gray-700 dark:text-gray-300">
                  B.Tech in Computer Engineering
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  MIT Academy of Engineering, Alandi
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  3rd Year | CGPA: 8.72
                </li>
              </ul>
            </div>
            
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-800 rounded-lg">
                  <Award className="text-orange-600 dark:text-orange-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">Achievements</h3>
              </div>
              <ul className="space-y-3">
                <li className="text-gray-700 dark:text-gray-300">
                  SIH 2024 Winner – IIT Gandhinagar
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  Tech SaviSkaar 3.0 Winner
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  IBM Certification Courses
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 dark:bg-green-800 rounded-lg">
                  <Briefcase className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">Experience</h3>
              </div>
              <ul className="space-y-3">
                <li className="text-gray-700 dark:text-gray-300">
                  Multiple Hackathon Winner
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  Completed Cisco Internship
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  Computer Networks & Cloud Computing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;