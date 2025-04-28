import React from 'react';
import { Trophy, Award, Briefcase, GraduationCap } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  year: string;
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 'tech-saviskaar',
      title: 'Tech SaviSkaar 3.0 Winner',
      description: 'First Runner Up in Tech SaviSkaar 3.0 hackathon for an innovative solution.',
      icon: <Award size={24} />,
      color: 'bg-blue-500',
      year: '2025'
    },
    {
      id: 'sih-2024',
      title: 'SIH 2024 Winner',
      description: 'Winner of Smart India Hackathon 2024 at IIT Gandhinagar for developing BHASHA_SETU, an inclusive language learning application.',
      icon: <Trophy size={24} />,
      color: 'bg-yellow-500',
      year: '2024'
    },
    
    {
      id: 'cisco-internship',
      title: 'Cisco Internship',
      description: 'Completed internship at Cisco focusing on computer networks and networking technologies.',
      icon: <Briefcase size={24} />,
      color: 'bg-green-500',
      year: '2023'
    },
    {
      id: 'ibm-certification',
      title: 'IBM Certification Courses',
      description: 'Completed IBM certification courses in AI and Cloud computing technologies.',
      icon: <GraduationCap size={24} />,
      color: 'bg-purple-500',
      year: '2022'
    }
  ];

  return (
    <section id="achievements" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Achievements" subtitle="Milestones and recognitions" />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-800"></div>
            
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div key={achievement.id} className="relative">
                  {/* Year indicator */}
                  <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 mb-4 lg:mb-0">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-gray-800 bg-blue-600 text-white z-10 relative">
                      <span className="text-sm font-bold">{achievement.year}</span>
                    </div>
                  </div>
                  
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:ml-auto' : 'lg:pl-12'} pl-16 lg:pl-0`}>
                    <div className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300`}>
                      <div className="flex items-center mb-4">
                        <div className={`p-2 rounded-lg text-white ${achievement.color}`}>
                          {achievement.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4">
                          {achievement.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Icon on mobile */}
                  <div className="absolute top-0 left-0 lg:hidden">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full ${achievement.color} text-white`}>
                      {achievement.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;